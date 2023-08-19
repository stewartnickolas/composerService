import { observable } from 'mobx'
import Generator from './generator.js'
import Actions from './actions.js'
import Validator from './validator.js'
import StoreUtils from './storeUtils.js'
import {DialogType} from '../dialogs/dialogTypes.js'
import {
  conditionallyIncludeInitialState
} from "../dialogs/shared/conditionallyInclude.jsx"

/**
 * Mirrors the data structure found on the server
 */



class FormStore extends StoreUtils{

        /** FormDataDoc: The currently selected form. */
        @observable formData;

        @observable showDialog;
        @observable dialogContents;
        @observable dialogType;

        @observable formIsLoading;
        @observable refreshId;

    constructor(){
        super();
        console.log('formStore constructor called');
        this._type = "formStore";
        this.formData = new FormDataDoc();
        this.showDialog = false;
        this.dialogContents = {};
        Actions.formStore = this;
        Generator.formStore = this;
        Validator.formStore = this;

        let errors = document.getElementById("composerErrors").innerHTML;
        if(!!errors){
          console.log("Trying to show error...");
          Actions.openDialog(DialogType.ERROR, {error: errors});
        }
    }

    /**
     * Transforms a json representation of a FormDataDoc object into
     * a FormDataDob object and hydrates the store with it
     * 
     * @param {FormDataDoc} obj a json representation of a FormDataDoc
     * object 
     */
    restoreFromJson(obj){
        let tempData = {};
        try{
          tempData = JSON.parse(obj, FormDataDoc.reviver);
        } catch(e){
          console.log("failed to parse json: " + e);
          console.log("line: " + e.lineNumber);
          console.trace();
        }

        /** Hydrate the store. */
        this.setRoot(tempData);
        this.formData = tempData;
        console.log("loaded json for form:" + this.formData.id);
    }

    getFieldAssociations(type, fieldName){
      if(fieldName.length === 0){
        return [];
      }
      let ret = new Set();
      switch (type){
        case 'calculation':
          for(let i = 0; i < this.formData.calculations.length; i++){
            const calc = this.formData.calculations[i];
            const attrs = calc.attributes;
            for(let key in attrs){
              const attr = attrs[key];
              if (
                fieldName.length > 0 &&
                typeof attr.indexOf === "function" &&
                attr.indexOf(fieldName) > -1
              ) {
                ret.add(calc.id);
              }
            }
            for(let trigger of calc.triggers){
              if(trigger.fields.indexOf(fieldName) !== -1){
                ret.add(calc.id);
              }
            }
          }
          break;
        case 'constraint':
          for(let i = 0; i < this.formData.constraints.length; i++){
            const constraint = this.formData.constraints[i];
            const fields = constraint.fields;
            if(fields.indexOf(fieldName) !== -1){
                ret.add(constraint.id);
            }
            for(let trigger of constraint.triggers){
              if(trigger.fields.indexOf(fieldName) !== -1){
                ret.add(constraint.id);
              }
            }
          }
          break;
        default:
          console.log('unrecognized field association type: ' + type);
      }
      return Array.from(ret);
    }

    updateFieldReferences(oldName, newName){
      //calculation references
      for (let i = 0; i < this.formData.calculations.length; i++) {
        let calc = this.formData.calculations[i];
        if (calc.attributes && calc.attributes.calculatedField === oldName) {
          if(newName){
            calc.attributes.calculatedField = newName;
          } else {
            Actions.removeEditCheck("calculation", calc.id)
          }
        }
        if (calc.attributes.fields) {//has a fields attribute to check
          let fieldsReferenced = calc.attributes.fields.split(",");
          let fieldIdx = fieldsReferenced.indexOf(oldName);
          if (fieldIdx !== -1) {//found a reference in the 'fields' attribute
            if (!newName) {
              fieldsReferenced.splice(fieldIdx, 1);//delete
            } else {
              fieldsReferenced.splice(fieldIdx, 1, newName);//rename
            }
            let fieldsRefStr = fieldsReferenced.join(",");
            calc.attributes.fields = fieldsRefStr;
          }
        }
        if (calc.triggers) {
          calc.triggers.map((trigger) => {
            if (trigger.fields) {
              let fieldsReferenced = trigger.fields.split(",");
              let fieldIdx = fieldsReferenced.indexOf(oldName);
              if (fieldIdx !== -1) {
                if (!newName) {
                  fieldsReferenced.splice(fieldIdx, 1);//delete
                } else {
                  fieldsReferenced.splice(fieldIdx, 1, newName);//rename
                }
                trigger.fields = fieldsReferenced.join(",");
              }
            }
          });
        }
      }
      //constraint references
      for (let i = 0; i < this.formData.constraints.length; i++) {
        let constraint = this.formData.constraints[i];
        if (constraint.fields) {//has a fields attribute to check
          let fieldsReferenced = constraint.fields.split(",");
          let fieldIdx = fieldsReferenced.indexOf(oldName);
          if (fieldIdx !== -1) {//found a reference in the 'fields' attribute
            if (!newName) {
              fieldsReferenced.splice(fieldIdx, 1);//delete
            } else {
              fieldsReferenced.splice(fieldIdx, 1, newName);//rename
            }
            let fieldsRefStr = fieldsReferenced.join(",");
            constraint.fields = fieldsRefStr;
            //If all fields referenced by this constraint have been removed, remove the constraint
            if(constraint.fields.length === 0){
              Actions.removeEditCheck("constraint", constraint.id);
            }
          }
        }
        if (constraint.triggers) {
          constraint.triggers.map((trigger) => {
            if (trigger.fields) {
              let fieldsReferenced = trigger.fields.split(",");
              let fieldIdx = fieldsReferenced.indexOf(oldName);
              if (fieldIdx !== -1) {
                if (!newName) {
                  fieldsReferenced.splice(fieldIdx, 1);//delete
                } else {
                  fieldsReferenced.splice(fieldIdx, 1, newName);//rename
                }
                trigger.fields = fieldsReferenced.join(",");
              }
            }
          });
        }
      }

      //app:display references
      let fieldsWithAppDisplay = this.findNodesOfType('field', field => field.controlDisplayField.length > 0);
      fieldsWithAppDisplay.map(field => {
        if (field.controlDisplayField === oldName) {
          if (!newName) {
            field.controlDisplayField = '';
            field.controlDisplayShowHide = '';
            field.controlDisplayValue = '';
          } else {
            field.controlDisplayField = newName;
          }
        }
      });
  }

    /**
   * In some cases (i.e. deleting sections / tables / cells) we need to know which fields are being deleted as a result, in order to update calculations associated with those fields
   * @param {type} node
   * @returns {Array}
   */
  findDescendantFields(node){
    var fields = [];
    var children = node.getChildren();
    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        var descendants = this.findDescendantFields(children[i]);
        fields = [fields, ...descendants];
      }
    } else if (node.fieldName) {//Only want to add it if this node is actually a field -- could be a section / table / cell without children
      fields.push(node);
    }
    return fields;
  };


    getFieldNames(){
      let names = [];
      for(let section of this.formData.sections){
        for(let row of section.rows){
          for(let table of row.tables){
            for(let tableRow of table.tableRows){
              for(let tableCell of tableRow.cells){
                for(let component of tableCell.components){
                  if(component._type === 'field' && component.fieldType !== 'label'){
                    if(section.indexed && (section.fixedIndex !== undefined && section.fixedIndex > 0)){
                      names.push({name: component.fieldName, fixedIndex: section.fixedIndex});
                    } else {
                      names.push({name: component.fieldName});
                    }
                  }
                }
              }
            }
          }
        }
      }
      return names;
    }

/**
   * Creates a deep copy of a node recursively. That is, a deep copy
   * of node and all of its children will be created with some exceptions.
   * First, the id's of the copied object will be unique in order to be referenced
   * in the mobx store. Secondly, share rules are ignored for components that support
   * them. Share rules are initalized to an empty set even if the component was
   * copied from a shared form
   *
   * Deep copies are made by manually copying properties from copyable object
   * to new instance. Object.assign() is not used because it copied getters
   * and setters, so method like SectionData.getChildren() would return an invalid
   * value
   *
   * @param {SectionData|TableData|TableRowData|TableCellData|FieldData} node a
   * node in the current selected FormDataDoc tree, 'formData'
   */
  deepCopy(node) {
    /** 
     * The following logic determines highest index of a field, table, row,
     * and section on this form. For instance, if there are 5 sections on a form,
     * then the startingSectionIndex should be 6. These indees will be unsed
     * to create unique id's for each of the copied elements
     */
    let startingSectionIndex = this.getUniqueId("section", "section_");
    startingSectionIndex = startingSectionIndex.substring(
      startingSectionIndex.lastIndexOf("_") + 1
    );

    let startingRowIndex = this.getUniqueId("row", "row_");
    startingRowIndex = startingRowIndex.substring(
      startingRowIndex.lastIndexOf("_") + 1
    );

    let startingTableIndex = this.getUniqueId("table", "table_");
    startingTableIndex = startingTableIndex.substring(
      startingTableIndex.lastIndexOf("_") + 1
    );

    let startingFieldIndex = this.getUniqueId("field", "form_element_");
    startingFieldIndex = startingFieldIndex.substring(
      startingFieldIndex.lastIndexOf("_") + 1
    );

    let elementIndeces = {
      sectionIndex: parseInt(startingSectionIndex),
      rowIndex: parseInt(startingRowIndex),
      tableIndex: parseInt(startingTableIndex),
      fieldIndex: parseInt(startingFieldIndex),
    };

    switch (node._type) {
      case "section":
        return this._deepCopySection(node, elementIndeces);
      case "row":
        return this._deepCopyRow(node, elementIndeces);
      case "table":
        return this._deepCopyTable(node, elementIndeces);
      case "tableRow":
        return this._deepCopyTableRow(node, elementIndeces);
      case "cell":
        return this._deepCopyTableCell(node, elementIndeces);
      case "field":
        return this._deepCopyField(node, elementIndeces);
      case "calculation":
        return this._deepCopyCalculation(node);
      case "constraint":
        return this._deepCopyConstraint(node);
      default:
        throw new Error(
          "Deep copy has not been implemented for node type: " + node._type
        );
    }
  }

  /**
   * Creates a deep copy of section with a unique newSectionId. This deep copy
   * includes all children object too
   *
   * @param {SectionData} section a SectionData object
   * @param {string} newSectionId a unique id that will be assigned to copied section
   * @param {object} elementIndeces a json object that will be used to generate
   * unique id's for the new nodes that are created. These id's are
   * necessary to identify a particular node in the mobx store
   */
  _deepCopySection(section, elementIndeces) {
    let newSection = new SectionData();
    /**
     * Create deep copy of SectionData object. We do not copy over class
     * functions because the return value will be cached. For example if
     * we copied functions then newSection.getChildren() would return the
     * value from section.getChildren().
     */
    for (let key in newSection) {
      if (typeof newSection[key] !== "function") {
        newSection[key] = section[key];
      }
    }
    newSection.id = "section_" + elementIndeces.sectionIndex;

    // Create a deep copy of section's children
    newSection.rows = [];
    for (let i = 0; i < section.rows.length; i++) {
      const row = section.rows[i];
      newSection.rows.push(this._deepCopyRow(row, elementIndeces));
    }

    elementIndeces.sectionIndex += 1;
    return newSection;
  }

  /**
   * Creates a deep copy of row with a unique newRowId. This deep copy includes
   * all children objects too
   *
   * @param {RowData} row a RowData object
   * @param {object} elementIndeces a json object that will be used to generate
   * unique id's for the new nodes that are created. These id's are
   * necessary to identify a particular node in the mobx store
   */
  _deepCopyRow(row, elementIndeces) {
    let newRow = new RowData();
    /**
     * Create deep copy of RowData object. We do not copy over class
     * functions because the return value will be cached. For example if
     * we copied functions then newRow.getChildren() would return the
     * value from row.getChildren()
     */
    for (let key in newRow) {
      if (typeof newRow[key] !== "function") {
        newRow[key] = row[key];
      }
    }
    newRow.id = "row_" + elementIndeces.rowIndex; // Note that row id's are 0-based.;

    // Create a deep copy of row's children
    newRow.tables = [];
    for (let i = 0; i < row.tables.length; i++) {
      const table = row.tables[i];
      newRow.tables.push(this._deepCopyTable(table, elementIndeces));
    }

    /**
     * We just copied a new row which is supposed to be added to the form
     * store. So we increment the number of rows so unique id's can continue
     * to be generated
     */
    elementIndeces.rowIndex += 1;
    return newRow;
  }

  /**
   * Creates a deep copy of table with a unique newTableId. This deep copy includes
   * all children objects too
   *
   * @param {TableData} table a TableData object
   * @param {object} elementIndeces a json object that will be used to generate
   * unique id's for the new nodes that are created. These id's are
   * necessary to identify a particular node in the mobx store
   */
  _deepCopyTable(table, elementIndeces) {
    let newTable = new TableData();
    /**
     * Create deep copy of TableData object. We do not copy over class
     * functions because the return value will be cached. For example if
     * we copied functions then newTable.getChildren() would return the
     * value from table.getChildren()
     */
    for (let key in newTable) {
      if (typeof newTable[key] !== "function") {
        newTable[key] = table[key];
      }
    }
    newTable.id = "table_" + elementIndeces.tableIndex; // Note that table id's are 0-based.;

    /**
     * Initialize copied table with empty share rules. Even if this table
     * was copied from a shared form, it is undesirable to carry over
     * its share rules
     */
    newTable.shareRules = { type: "none", instances: [] };

    // Create a deep copy of table's children
    newTable.tableRows = [];
    for (let i = 0; i < table.tableRows.length; i++) {
      const tableRow = table.tableRows[i];
      const newTableRowId = "table_" + elementIndeces.tableIndex + "_row" + i;
      newTable.tableRows.push(
        this._deepCopyTableRow(tableRow, newTableRowId, elementIndeces)
      );
    }

    /**
     * We just copied a new table which is supposed to be added to the form
     * store. So we increment the number of tables so unique id's can continue
     * to be generated
     */
    elementIndeces.tableIndex += 1;
    return newTable;
  }

  /**
   * Creates a deep copy of tableRow with a unique newTableRowId. This deep copy includes
   * all children objects too
   *
   * @param {TableRowData} tableRow a TableRowData object
   * @param {string} newTableRowId a unique id that will be assigned to copied tableRow
   * @param {object} elementIndeces a json object that will be used to generate
   * unique id's for the new nodes that are created. These id's are
   * necessary to identify a particular node in the mobx store
   */
  _deepCopyTableRow(tableRow, newTableRowId, elementIndeces) {
    let newTableRow = new TableRowData();
    /**
     * Create deep copy of TableRowData object. We do not copy over class
     * functions because the return value will be cached. For example if
     * we copied functions then newTableRow.getChildren() would return the
     * value from tableRow.getChildren()
     */
    for (let key in newTableRow) {
      if (typeof newTableRow[key] !== "function") {
        newTableRow[key] = newTableRow[key];
      }
    }
    newTableRow.id = newTableRowId;

    // Create a deep copy of table's children
    newTableRow.cells = [];
    for (let i = 0; i < tableRow.cells.length; i++) {
      const cell = tableRow.cells[i];
      const newCellId = newTableRowId + "_cell" + i;
      newTableRow.cells.push(
        this._deepCopyTableCell(cell, newCellId, elementIndeces)
      );
    }

    return newTableRow;
  }

  /**
   * Creates a deep copy of cell with a unique newCellId. This deep copy includes
   * all children objects too
   *
   * @param {TableCellData} cell a TableCellData object
   * @param {string} newCellId a unique id that will be assigned to copied cell
   * @param {object} elementIndeces a json object that will be used to generate
   * unique id's for the new nodes that are created. These id's are
   * necessary to identify a particular node in the mobx store
   */
  _deepCopyTableCell(cell, newCellId, elementIndeces) {
    let newCell = new TableCellData();
    /**
     * Create deep copy of TableCellData object. We do not copy over class
     * functions because the return value will be cached. For example if
     * we copied functions then newCell.getChildren() would return the
     * value from cell.getChildren()
     */
    for (let key in newCell) {
      if (typeof newCell[key] !== "function") {
        newCell[key] = cell[key];
      }
    }
    newCell.id = newCellId;

    // Create a deep copy of table's children
    newCell.components = [];
    for (let i = 0; i < cell.components.length; i++) {
      const field = cell.components[i];
      /**
       * We do not use this.getUniqueId() here because it generates an id
       * based on the number of fields in the store. But the copied fields
       * have not been added to the store yet, so we keep track of them here
       */
      newCell.components.push(this._deepCopyField(field, elementIndeces));
    }

    return newCell;
  }

  /**
   * Creates a deep copy of field with a unique newFieldId. This deep copy includes
   * all children objects too
   *
   * @param {FieldData} field a FieldData object
   * @param {object} elementIndeces a json object that will be used to generate
   * unique id's for the new nodes that are created. These id's are
   * necessary to identify a particular node in the mobx store
   */
  _deepCopyField(field, elementIndeces) {
    let newField = new FieldData();
    /**
     * Create deep copy of TableCellData object. We do not copy over class
     * functions because the return value will be cached. For example if
     * we copied functions then newField.getChildren() would return the
     * value from field.getChildren()
     */
    for (let key in newField) {      
      if (typeof field[key] !== "function") {
        newField[key] = field[key];
      }
    }
    newField.id = "form_element_" + elementIndeces.fieldIndex;

    /**
     * Labels should always have an empty field name.
     * For other types of fields, we'll need to figure out the unique name.
     */
    if (field.fieldType === "label") {
        newField.fieldName = "";
    } else {
        /**
         * Here we give the field a unique name. A field's 'fieldName' property is
         * for all intents and purposes the id of a field. If we were to give
         * the responsibility of uniquely identifying the field to the caller then
         * many problems may occur if they fail to assign the id. For instance,
         * if caller adds this new field to the store with a duplicate 'fieldName',
         * then calculations, which are connected to fields by the same attribute,
         * may erroneously change if the new field's 'fieldName' is later changed
         */
        /**
         * Copied field names are of the form <field name>_copy<copy #> (e.g.,
         * field_1_copy1, field_2_copy2, etc.). The following code constructs a
         * field name in this format
         */
        const originalFieldNameRegex = /_copy\d*$/;
        /**
         * Attempts to group copied field name into <field name> and _copy<copy index>.
         * The result of this regex will be null if 'field' has not been copied yet,
         * and therefore will not have _copy<copy index> appended to it
         */
        const originalFieldName = field.fieldName.split(originalFieldNameRegex)[0];

        /**
         * Gets the fields on this form that beging with 'baseFieldName'. Since
         * we are copying a field, matches.length should be >= 1
         */
        const matches = this.findNodesOfType("field", (field) =>
            field.fieldName.startsWith(originalFieldName)
        );

        /**
         * Determines how many times this field has been copied so that a unique name can
         * be constructed. For instance, if field_1, field_1_copy2, and field_1_copy3
         * exist on a form, then 'highestCopyIndex' should be 3
         */
        let highestCopyIndex = 1;
        for (const matchedField of matches) {
            /** Groups field name into [<full field name>, <base field name>, "_copy",
             * and <copy index>]
             */
            const parseCopyIndexRegex = /(.*)(_copy)(\d+)$/;
            const parseCopyIndex = parseCopyIndexRegex.exec(matchedField.fieldName);
            if (!!parseCopyIndex && !!parseCopyIndex[3]) {
                const copyIndex = parseInt(parseCopyIndex[3]);
                if (copyIndex > highestCopyIndex) {
                    highestCopyIndex = copyIndex;
                }
            }
        }

        newField.fieldName = `${originalFieldName}_copy${highestCopyIndex + 1}`;
    }

    /**
     * Initialize copied field with empty share rules. Even if this field
     * was copied from a shared form, it is undesirable to carry over
     * its share rules.
     */
    newField.shareRules = { type: "none", instances: [] };

    /**
     * We just copied a new field which is supposed to be added to the form
     * store. So we increment the number of fields so unique id's can continue
     * to be generated
     */
    elementIndeces.fieldIndex += 1;
    return newField;
  }

  /**
   * Creates a deep copy of calculation with a unique id
   *
   * @param {CalculationData} calculation a CalculationData object that should be copied
   */
   _deepCopyCalculation(calculation) {
    /**
     * Since calculations (CalculationData)
     * objects do not contain circular references (unlike objects like FieldData), we make a
     * deep copy of a calculation using JSON.parse(JSON.stringify(calculation))
     */
    let newCalculation = JSON.parse(JSON.stringify(calculation));

    /**
     * Since calculation (CalculationData) objects do not have any children objects that should
     * be copied, such as SectionData, we may infer the id based on the number of calculations
     * in the store (i.e., FormStore.getUniqueId()). In other instances, like deep copying child
     * objects like FieldData, we'd to generate id's during the copy process
     */
    newCalculation.id = this.getUniqueId("calculation", "calculation_");

    return newCalculation;
  }

  /**
   * Creates a deep copy of constraint with a unique id
   *
   * @param {ConstraintData} constraint a ConstraintData object that should be copied
   */
   _deepCopyConstraint(constraint) {
    /**
     * Since constraints (ConstraintData) objects do not contain circular references 
     * (unlike objects like FieldData), we make a deep copy of a constraints using 
     * JSON.parse(JSON.stringify(constraint))
     */
    let newConstraint = JSON.parse(JSON.stringify(constraint));

    /**
     * Since constraint (ConstraintData) objects do not have any children objects that should
     * be copied, such as SectionData, we may infer the id based on the number of constraints
     * in the store (i.e., FormStore.getUniqueId()). In other instances, like deep copying child
     * objects like FieldData, we'd to generate id's during the copy process
     */
    newConstraint.id = this.getUniqueId("constraint", "constraint_");

    return  newConstraint;
  }
}

export class FormDataDoc{

        @observable id;
        @observable formName;
        @observable formLabel;

        @observable lastPublishedDateTime;
        @observable lastPublishedBy;
        @observable lastEditedDateTime;
        @observable lastEditedBy;

        @observable canView;
        @observable canEdit;
        @observable canSign
        @observable canReview;
        @observable canFinalize;
        @observable canQuery;
        @observable canLock;

        @observable onDemand;
        @observable displayState;
        @observable enableQueries;
        @observable displayChanges;

        @observable sections = [];
        @observable calculations = [];
        @observable constraints = [];

        @observable publishHistory = [];

        constructor(obj){
            this._type = "form";
            this.id = "";
            this.formName = "";//vision name i.e. form.name.
            this.formLabel = "";

            this.canView = '';
            this.canEdit = '';
            this.canSign = '';
            this.canReview = '';
            this.canFinalize = '';
            this.canQuery = '';
            this.canLock = '';
            this.displayState = true;
            this.enableQueries = true;
            this.displayChanges = true;
            this.onDemand = false;

            this.sections = [];
            this.calculations = [];
            this.constraints = [];
            this.publishHistory = [];

            if(obj !== undefined){
              Object.assign({}, this, obj);
            }
         }

    getChildren () {
      return this.sections;
    };

    static revive(obj){
      let newObj = new FormDataDoc();
      Object.assign(newObj, obj);
      newObj.sections = obj.sections;
      newObj.calculations = obj.calculations;
      newObj.constraints = obj.constraints;
      return newObj;
    }

    static reviver(k, v){
        if(v instanceof Object){
            if(v._type === 'form'){
                return FormDataDoc.revive(v);
            }
            if(v._type === 'section'){
                return SectionData.revive(v);
            }
            if(v._type === 'row'){
                return RowData.revive(v);
            }
            if(v._type === 'table'){
                return TableData.revive(v);
            }
            if(v._type === 'tableRow'){
                return TableRowData.revive(v);
            }
            if(v._type === 'tableCell'){
                return TableCellData.revive(v);
            }
            if(v._type === 'field'){
                return FieldData.revive(v);
            }
            if(v._type === 'module'){
                return Module.revive(v);
            }
            if(v._type === 'constraint'){
              return ConstraintData.revive(v);
            }
            if(v._type === 'trigger'){
              return TriggerData.revive(v);
            }
        }
        return v;
    }

}

/**
 * Class definition of a section. Data is displayed
 * by section.jsx and edited using the addOrEditSection.jsx
 * component.
 * 
 * Default values for the properties are defined in SectionData.java
 * and are set whenever a new form is added. See addForm.jsx and 
 * ComposerController.createForm() for more info.
 */
export class SectionData {

    _type;
    
    @observable id;
    @observable indexed;
    @observable fixedIndex;
    @observable reversedIndex;
    @observable sectionName;
    @observable sectionLabel;
    @observable blankFields; /** Default is true. */
    @observable controlDisplayField;
    @observable controlDisplayValue;
    @observable controlDisplayShowHide;
    @observable controlDisplayType;

    @observable conditionallyIncludeChecked;
    @observable conditionallyIncludeType;
    @observable conditionallyIncludeFieldPath;
    @observable conditionallyIncludeValue;
    @observable canEdit = '';

    @observable rows = [];
    @observable obfuscated;
    @observable addInfoIcon;
    @observable addInfoIconText;

    constructor(obj){

        if(obj){
            Object.assign({}, this, obj);
        } else {
            this._type = 'section';
            this.id = "";
            this.indexed = false;
            this.fixedIndex = -1;
            this.reversedIndex = false;
            this.sectionName = "";
            this.sectionLabel = "";
            this.rows = [];
            Object.assign(this, conditionallyIncludeInitialState)
        }
    }

    getChildren = () => {
      //console.log("called section.getChildren");
      return this.rows;
    };

    static revive(obj){
      let newSection = new SectionData();
      Object.assign(newSection, obj);
      newSection.rows = obj.rows;
      return newSection;
    }
}

export class TableData{
    @observable id;
    //@todo: This should eventually be used to replace most or all of the simple member variables for a table
    @observable attributes;
    @observable numRows;
    @observable numCols;
    @observable width;
    @observable alignment;
    @observable blankFields; /** Default is true, set in TableData.java. */
    @observable autoNumber;
    @observable showBorders;
    @observable columnHeaders;
    @observable columnHeadersSortBy;
    @observable rowLabels;
    @observable columnWidths;
    @observable tableRows;
    @observable controlDisplayField;
    @observable controlDisplayValue;
    @observable controlDisplayShowHide;
    @observable usingVisibility;

    @observable conditionallyIncludeChecked;
    @observable conditionallyIncludeType;
    @observable conditionallyIncludeFieldPath;
    @observable conditionallyIncludeValue;

  @observable shareRules;

  constructor() {
    this._type = "table";
    this.id = "";
    this.attributes = {};
    this.numRows = 1;
    this.numCols = 1;
    this.width = "";
    this.alignment = "";
    this.autoNumber = false;
    this.showBorders = false;
    this.columnHeaders = [];
    this.rowLabels = [];
    this.columnWidths = [];
    this.tableRows = [];
    this.controlDisplayField = '';
    this.controlDisplayValue = '';
    this.controlDisplayShowHide = '';
    this.usingVisibility = '';
    Object.assign(this, conditionallyIncludeInitialState)
    this.shareRules = {type: 'none', instances:[]};
  }

  getChildren(){
      return this.tableRows;
  }

  static revive(obj){
      let newObj = new TableData();
      Object.assign(newObj, obj);
      newObj.tableRows = obj.tableRows;
      newObj.columnHeaders = obj.columnHeaders;
      newObj.rowLabels = obj.rowLabels;
      newObj.tableRows = obj.tableRows;
      newObj.attributes = obj.attributes;
      return newObj;
    }
}

export class TableRowData{

   @observable id;
   @observable cells;

  constructor(){
    this._type = "tableRow";
    this.id = "";
    this.cells = [];
  }

  getChildren(){
      return this.cells;
  }

  static revive(obj){
      let newObj = new TableRowData();
      Object.assign(newObj, obj);
      newObj.cells = obj.cells;
      return newObj;
    }
}

export class RowData{

    @observable id;
    @observable rowName;
    @observable rowLabel;
    @observable tables;


  constructor(){
    this._type = 'row';
    this.id = "";
    this.rowName = "";
    this.rowLabel = "";
    this.tables = [];
  }

  getChildren(){
      return this.tables;
  }

  static revive(obj){
      let newObj = new RowData();
      Object.assign(newObj, obj);
      newObj.tables = obj.tables;
      return newObj;
    }
}

export class TableCellData{

    @observable id;
    @observable align;
    @observable colspan;
    @observable rowspan;
    @observable layoutOrientation;
    @observable components;


  constructor() {
    this._type = 'tableCell'
    this.id = "";
    this.align = "center";
    this.colspan = 1;
    this.rowspan = 1;
    this.layoutOrientation = "vertical";
    this.components = [];
  }

  getChildren(){
      return this.components;
  }

  static revive(obj){
      let newCell = new TableCellData();
      Object.assign(newCell, obj);
      newCell.components = obj.components;
      return newCell;
  }
}

export class Module {
    @observable id;
    @observable _type;
    @observable name;
    @observable label;
    @observable replacementMap;

    constructor(){
      this.id = "";
      this._type = 'module';
      this.name = '';
      this.label = '';
      this.replacementMap = {};
    }

    getChildren(){
      return [];
    }
    
    static revive(obj){
      let newModule = new Module();
      Object.assign(newModule, obj);
      return newModule;
    }
}

/**
 * The frontend representation of a form field properties object. This model
 * should exactly match the backend (java) version as defined by FieldData.java
 */
export class FieldData {

    @observable fieldName;
    @observable fieldLabel;
    @observable fieldType;
    @observable fieldPlaceholder;
    @observable fieldOptions;
    @observable fieldOptionsClass;
    @observable fieldHasInitialValue;
    @observable fieldInitialValue;
    @observable optionsFromOwnerField;
    @observable labelClass;
    @observable labelColor;
    @observable readOnly;
    @observable cDash;
    @observable fieldSize;
    @observable usingDimensions;
    @observable absoluteOrRelativeSize;
    @observable fieldWidth;
    @observable fieldHeight;
    @observable maxLength;
    @observable usingVisibility;
    @observable showBackground;
    @observable controlDisplayField;
    @observable controlDisplayValue;
    @observable controlDisplayShowHide;
    @observable imgSrc;
    @observable imgWidth;
    @observable imgHeight;
    @observable conditionallyIncludeChecked;
    @observable conditionallyIncludeType;
    @observable conditionallyIncludeFieldPath;
    @observable conditionallyIncludeValue;
    @observable blankFields = true; /** Default is true. */
    @observable attributes;
    @observable shareRules;
    @observable canEdit;
    @observable requireChangeReason;
    @observable changesState;
    @observable showChanges;
    @observable onChangeSubmit;
    @observable usingLearn;
    @observable suppressFromExport;
    @observable addInfoIcon;
    @observable addInfoIconText;
    @observable usingOptionsFromUserRole;
    @observable optionsUserRoles;
    @observable controlDisplayType;
    @observable comboFileName;
    @observable blindedTo;
    @observable value;

    constructor(obj) {
        if(obj){
            Object.assign({}, this, obj);
        } else {
            this._type = "field";
            this.id = "";
            this.fieldName = "";
            this.fieldLabel = "";
            this.fieldType = "";
            this.fieldPlaceholder = "";
            this.fieldOptions = [];
            this.fieldOptionsClass = "";
            this.fieldHasInitialValue = false;
            this.fieldInitialValue = "";
            this.optionsFromOwnerField = "";
            this.labelClass = "";
            this.labelColor = "";
            this.readOnly = false;
            this.cDash = "";
            this.fieldSize = ""
            this.usingDimensions = false;
            this.absoluteOrRelativeSize = "";
            this.fieldWidth = "";
            this.fieldHeight = "";
            this.maxLength = "";
            this.usingVisibility = "";
            this.showBackground = true;
            this.controlDisplayField = "";
            this.controlDisplayValue = "";
            this.controlDisplayShowHide = "";
            this.attributes = {};
            this.shareRules = {type: 'none', instances:[]};
            Object.assign(this, conditionallyIncludeInitialState)
        }
    }

    getChildren() {
      return [];//leaf
    };

    static revive(obj){
      let newObj = new FieldData();
      Object.assign(newObj, obj);
      newObj.fieldOptions = obj.fieldOptions;
      newObj.attributes = obj.attributes;
      return newObj;
    }
}


export class ConstraintData{
  id
  _type
  @observable editCheckType;
  @observable fields;
  @observable value;
  @observable errorMsg;
  @observable severity;
  @observable triggers;
  @observable allTriggersRequired;
  @observable attributes;

  consntructor(){
    this._type = 'constraint';
    this.editCheckType = ''
    this.fields = '';
    this.value = '';
    this.errorMsg = '';
    this.severity = 'error';
    this.triggers = [];
    this.allTriggersRequired = true;
    this.attributes = {};
  }

  getChildren(){
    return this.triggers;
  }

  static revive(obj){
      let newObj = new ConstraintData();
      Object.assign(newObj, obj);
      newObj.triggers = obj.triggers;
      return newObj;
  }
}

export class CalculationData{
  id
  @observable _type
  @observable editCheckType;
  @observable attributes;
  @observable triggers;
  @observable allTriggersRequired;

  consntructor(){
    this._type = 'calculation';
    this.editCheckType = ''
    this.attributes = {};
    this.triggers = [];
    this.allTriggersRequired = true;
  }

  getChildren(){
    return this.triggers;
  }

  static revive(obj){
      let newObj = new CalculationData();
      Object.assign(newObj, obj);
      newObj.triggers = obj.triggers;
      return newObj;
  }
}

export class TriggerData{
  id
  _type
  @observable triggerType;
  @observable fields;
  @observable value;

  constructor(){
    this._type = 'trigger'
    this.triggerType = '';
    this.fields = '';
    this.value = '';
  }

  getChildren(){
    return [];
  }

  static revive(obj){
      let newObj = new TriggerData();
      Object.assign(newObj, obj);
      return newObj;
  }
}

export default FormStore;
