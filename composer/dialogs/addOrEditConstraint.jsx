import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {observer, inject} from 'mobx-react'
import Actions from '../data/actions.js'
import Info from '../interface/info.jsx'
import TriggerRow, {triggersWithoutValue} from './triggerRow.jsx'
import FieldFinder from '../interface/components/fieldFinder.jsx'
import Validator from '../data/validator.js'
import ResizeDialogTitle from '../interface/ResizeDialogTitle.jsx';
import {DialogType} from "./dialogTypes";
import Switch from "@material-ui/core/Switch";
import Label from "../interface/components/label.jsx";

@inject('studyStore','formStore', 'tldStore')
@observer
export default class addOrEditConstraint extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editCheckType: '',
            severity: 'error',
            fields: '',
            value: '',
            errorMsg: '',
            population: '',
            attributes: {},
            triggers: [],
            allTriggersRequired: true,
            errorMap: {},
            ...this.props
        };
        Object.assign(this.state, props);

        this.handleAddTrigger = this.handleAddTrigger.bind(this);
        this.handleRemoveTrigger = this.handleRemoveTrigger.bind(this);
        this.handleChangeTrigger = this.handleChangeTrigger.bind(this);
        this.handleTriggerRequirements = this.handleTriggerRequirements.bind(this);
        this.handleFieldsChange = this.handleFieldsChange.bind(this);
        this.handleOkBtn = this.handleOkBtn.bind(this);
        this.prevNextEditCheck = this.prevNextEditCheck.bind(this);
    }

    handleFieldsChange(name, values){
        if(this.props.studyStore.readonlyMode) return;
        let concatenated = values.join();
        this.setState({
            [name]: concatenated
        });
    }

    handleAddTrigger(){
        if(this.props.studyStore.readonlyMode) return;
        let trigs = this.state.triggers.slice();
        trigs.push({
            id: 'trigger_' + (this.state.triggers.length + 1),
            triggerType: '',
            fields: '',
            value: ''
        });
        this.setState({
            triggers: trigs
        })
    }

    handleRemoveTrigger(index) {
        if(this.props.studyStore.readonlyMode) return;
        let trigs = this.state.triggers.slice();
        trigs.splice(index, 1);
        this.setState({
            triggers: trigs
        })
    }

    handleChangeTrigger(index, name, val) {
        if(this.props.studyStore.readonlyMode) return;
        let triggers = this.state.triggers.slice();
        let trigger = Object.assign({}, triggers[index]);
        if (name == 'triggerType' && triggersWithoutValue.indexOf(val) >= 0) {
            trigger.value =  ''
        }
        trigger[name] = val;
        triggers[index] = trigger;
        this.setState({
            triggers
        });
    }

    handleTriggerRequirements(event) {
        if(this.props.studyStore.readonlyMode) return;
        this.setState({
            allTriggersRequired: event.target.checked
        });
    }

    validate(){
        let errorMap = {};
        Validator.notEmpty(errorMap, "The fields attribute", this.state.fields, "fields");
        Validator.notEmpty(errorMap, "A constraint type", this.state.editCheckType, "editCheckType");
        const tag = this.props.tldStore.tldInfo.constraints[this.state.editCheckType];
        if(tag){
            for(let required of tag.requiredAttributes){
                if(required.name === "value"){
                    Validator.notEmpty(errorMap, "The attribute value ", this.state.value, "value");
                    break;
                }
            }
        }
        for(let trigger of this.state.triggers){
            Validator.notEmpty(errorMap, "A trigger type", trigger.triggerType, "triggerTypes." + trigger.id);
            Validator.notEmpty(errorMap, "The trigger fields attribute", trigger.fields, "triggerFields." + trigger.id);
            const triggerTag = this.props.tldStore.tldInfo.constraints[trigger.triggerType];
            if(triggerTag){
                for(let required of triggerTag.requiredAttributes){
                    if(required.name === "value"){
                        Validator.notEmpty(errorMap, "The attribute value ", trigger.value, "triggerValues." + trigger.id);
                        break;
                    }
                }
            }
        }

        //remove any attributes that are empty, as empty tags can cause problems with tag processing in Vision
        for(const [key, value] of Object.entries(this.state.attributes)){
            if(value.length === 0){
                delete this.state.attributes[key];
            }
        }

        this.setState({
            errorMap
        })
        let passed = Object.keys(errorMap).length === 0;
        return passed;
    }

    handleOkBtn(){
        if(this.validate()){
            if ('matchFirstFieldToAnyOther' === this.state.editCheckType) {
                // default attr so that last arg {2} of default error is printed in error message as field value
                // error.default.matchFirstFieldToAnyOther=One of the fields '{0}' {1} match the first field '{2}'
                // for example: Error: One of the fields 'field 1, field 2, field 3' must match the first field '<whose field value is...>'
                // defaulting to true is fine for user customized errors too, useFieldValue will be ignored
                this.state.attributes['useFieldValue'] = true;
            }
            let constraint = {
                _type: 'constraint',
                id: this.props.id,
                editCheckType: this.state.editCheckType,
                fields: this.state.fields,
                value: this.state.value,
                errorMsg: this.state.errorMsg,
                population: this.state.population,
                attributes: this.state.attributes,
                severity: this.state.severity,
                triggers: this.state.triggers,
                allTriggersRequired: this.state.allTriggersRequired
            }
            //Remove the 'value' attribute if it hasn't been defined for this type.  This can happen if the constraint already
            //has a value, and then the user changes to a constraint type that does not allow a value.
            const tag = this.props.tldStore.tldInfo.constraints[constraint.editCheckType];
            if(!this.props.tldStore.getTagAttribute(tag, 'value')){
                constraint.value = "";
            }
            Actions.addOrEditConstraint(constraint);
        }
    }

    handleChange = name => event => {
        if(this.props.studyStore.readonlyMode) return;
        this.setState({
            [name]: event.target.value,
        });
    };

    getTagAttributeDescription = (tag, attributeName) => {
        const attr = this.props.tldStore.getTagAttribute(tag, attributeName)
        return attr ? attr.description : ""
    }

    handleTypeChangeEvent = event => {
        if(this.props.studyStore.readonlyMode) return;

        const newType = event.target.value,
            tagDef = this.props
                .tldStore
                .tldInfo
                .constraints[newType];

        // collect new attributes,
        // which are the old attrs with irrelevant attributes removed,
        // where 'irrelevant' = not an attribute for the new calc type
        const newAttrs = {};
        for (let attrName in this.state.attributes) {         // loop over
            if (this.state.attributes.hasOwnProperty(attrName)) {
                if (tagDef.requiredAttributes.some(attr => attr.name === attrName)          // is it an attribute
                    || tagDef.optionalAttributes.some(attr => attr.name === attrName)) {   // for calc type
                    newAttrs[attrName] = this.state.attributes[attrName];
                }
            }
        }

        this.setState({
            editCheckType: newType,
            attributes: newAttrs
        })
    };

    handleAttrChange = (attr, value) => {
        if(this.props.studyStore.readonlyMode) return;
        let tempAttrs = Object.assign({}, this.state.attributes);
        if(attr.inputType === 'bool'){
            if(value === 'true'){
                tempAttrs[attr.name] = 'true';
            } else {
                delete tempAttrs[attr.name];
            }
        } else {
            tempAttrs[attr.name] = value;
        }
        this.setState({
            attributes: tempAttrs
        });
        //this.forceUpdate();
    }

    TagAttribute = ({ tag, attrName }) => {
        const attr = this.props.tldStore.getTagAttribute(tag, attrName)
        if (!attr)
            return null

        const value = this.state.attributes[attrName] ? this.state.attributes[attrName] : ''

        return (
            <div className="fieldWithInfo">
                <div className="textField">
                    <TextField label={attr.name}
                               fullWidth
                               value={value}
                               onChange={e => this.handleAttrChange(attr, e.target.value)}/>
                </div>
                <div>
                    <Info>
                        {attr.description ? attr.description : ''}
                    </Info>
                </div>
            </div>
        )
    }

    prevNextEditCheck(deltaIndex) {
        if (isNaN(this.props.index) || isNaN(deltaIndex) || deltaIndex == 0) {
            return;
        }
        let editChecks = this.props.formStore.formData.constraints;
        let newIndex = this.props.index + deltaIndex;
        let image = deltaIndex > 0 ? "/vision/interface/themes/default/img/next01_grey.png" : "/vision/interface/themes/default/img/back01_grey.png";
        let editCheck = editChecks.get(newIndex);
        if (editCheck == undefined) return;
        return (
            <NavArrowButton index={newIndex}
                            image={image}
                            dialogToOpen={DialogType.ADD_OR_EDIT_CONSTRAINT}
                            editCheck={editCheck}/>
        )
    }

    render() {
        const {triggers} = this.state;
        const tag = this.props.tldStore.tldInfo.constraints[this.state.editCheckType];
        let hasErrorFields = "fields" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "The fields attribute", this.state.fields, "fields") != 'OK');
        let hasErrorEditCheckType = "editCheckType" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "A constraint type", this.state.editCheckType, "editCheckType") != 'OK');
        let hasErrorValue = tag && this.props.tldStore.getTagAttribute(tag, 'value') && "value" in this.state.errorMap && (Validator.notEmpty(this.state.errorMap, "The attribute value ", this.state.value, "value") != 'OK');
        return(
            <div>
                <Dialog open={true} onClose={() => Actions.closeDialog()}  PaperComponent={this.props.paperComponent} fullScreen={this.props.fullScreen}>
                    <ResizeDialogTitle
                        title={`Constraint Properties: ${this.props.id || ''}`}
                        titleId="form-dialog-title"
                        fullScreen={this.props.fullScreen}
                        handleResize={this.props.handleResize}
                        navBtn={this.prevNextEditCheck}
                    />
                    <DialogContent style={{minWidth: '500px'}}>
                        <div className={`fieldWithInfo ${hasErrorEditCheckType ? "error_field" : ""}`}>
                            <FormControl style={{minWidth: '150px'}}>
                                <InputLabel>Type</InputLabel>
                                <Select value={this.state.editCheckType} onChange={this.handleTypeChangeEvent} autoWidth={true}>
                                    {constraintTypes.map((item, i) =>
                                        <MenuItem key={'constraint_type_' + i} value={item}>{item}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            {tag &&
                            <Info>{tag.description}</Info>
                            }
                        </div>
                        {hasErrorEditCheckType && <div className="errorMsg">{this.state.errorMap.editCheckType}</div>}
                        <div className="fieldWithInfo">
                            <FormControl>
                                <InputLabel>Importance</InputLabel>
                                <Select value={this.state.severity} onChange={this.handleChange('severity')} autoWidth={true}>
                                    <MenuItem value='error'>Error</MenuItem>
                                    <MenuItem value='warning'>Warning</MenuItem>
                                </Select>
                            </FormControl>
                            <Info>An Error (appears in red) indicates that the field must be filled out (and that the form will not be able to be submitted for review until the error is resolved (but data is still saved)). A Warning (appears in yellow) indicates that the field should be filled out. </Info>
                        </div>
                        <p/>
                        <div className={`textField ${hasErrorFields ? "error_field" : ""}`}>
                            <FieldFinder label="Fields" name="fields" value={this.state.fields}
                                         info={tag && this.getTagAttributeDescription(tag, 'fields')}
                                         onChange={this.handleFieldsChange}
                                         skipCategory={true} />
                        </div>
                        {hasErrorFields && <div className="errorMsg">{this.state.errorMap.fields}</div>}
                        {(tag && this.props.tldStore.getTagAttribute(tag, 'value')) &&
                        <div className={`fieldWithInfo ${hasErrorValue ? "error_field" : ""}`}>
                            <div className="textField">
                                <TextField label="Value" fullWidth value={this.state.value}
                                           onChange={this.handleChange('value')}/>
                            </div>
                            <div>
                                <Info>
                                    {tag && this.getTagAttributeDescription(tag, 'value')}
                                </Info>
                            </div>
                        </div>
                        }
                        {hasErrorValue && <div className="errorMsg">{this.state.errorMap.value}</div>}
                        <p/>

                        {(tag && this.props.tldStore.getTagAttribute(tag, 'errorMsg')) &&
                        <div className="fieldWithInfo">
                            <div className="textField">
                                <TextField label="Error Message" fullWidth
                                           value={this.state.errorMsg}
                                           onChange={this.handleChange('errorMsg')}/>
                            </div>
                            <div>
                                <Info>
                                    Leave blank to let VISION handle the error message or set a
                                    custom message that will be shown when this constraint is
                                    not met. This custom message will override the default VISION
                                    error message.
                                </Info>
                            </div>
                        </div>
                        }

                        <br/>
                        {(tag && tag.name === "noneMatch"
                            && this.props.tldStore.getTagAttribute(tag, 'population')) &&
                        <div className="fieldWithInfo">
                            <FormControl style={{minWidth: '8rem'}}>
                                <InputLabel>Population</InputLabel>
                                <Select value={this.state.population}
                                        onChange={this.handleChange('population')}
                                        autoWidth={true}>
                                    {/* Options derived from EditCheckTag.PopulationGroup enum */}
                                    <MenuItem value=""></MenuItem>
                                    <MenuItem value="sitePatients">Site Subjects</MenuItem>
                                    <MenuItem value="studyPatients">Study Subjects</MenuItem>
                                    <MenuItem value="studySites">Study Sites</MenuItem>
                                </Select>
                            </FormControl>
                            <Info>
                                Population defines the groups of data the constraint is looking at.  Leave blank if using the constraint on an individual form (e.g., Field_1 in an indexed (repeating) table must be unique).
                                Use "Site Subjects" if the field should be unique across all subjects within a site. Use "Study Subjects" if a field should be unique across the entire study (all sites).
                                Use "Study Sites" if a field should be unique across sites.
                            </Info>
                        </div>
                        }

                        <br/>
                        {(tag && tag.name === "matchDictionary") &&
                        <this.TagAttribute tag={tag} attrName='db'/>
                        }
                        <h2>Triggers</h2>
                        {(this.state.triggers.length > 1) &&
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <h4>
                                <Label>Require all conditions to trigger</Label>
                            </h4>
                            <Info>By default, this constraint will only be triggered if all of the following conditions are met. If turned off, constraint will trigger when one or more conditions is met.</Info>
                            <Switch
                                checked={this.state.allTriggersRequired}
                                onChange={this.handleTriggerRequirements}
                                value={true}
                            />
                        </div>
                        }
                        {console.log(this.state.triggers.length)}
                        {triggers.map((trigger, index) =>
                            <TriggerRow key={trigger.id} id={trigger.id} index={index} handleChangeTrigger={this.handleChangeTrigger} handleRemoveTrigger={this.handleRemoveTrigger} {...trigger} errors={this.state.errorMap} />
                        )}
                        <Button onClick={this.handleAddTrigger} style={{marginBottom: '60px'}}>Add Trigger</Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleOkBtn}>Ok</Button>
                        <Button onClick={() => Actions.closeDialog()}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

const constraintTypes = [
    'notBlank',
    'or',
    'after',
    'isAfter',
    'before',
    'isBefore',
    'alphaNumericFormat',
    'blank',
    'contains',
    'dateOrder',
    'strictDateOrder',
    'reverseDateOrder',
    'strictReverseDateOrder',
    'datesOutsideDays',
    'datesOutsideHours',
    'datesOutsideMinutes',
    'datesWithinDays',
    'datesWithinMinutes',
    'datesWithinHours',
    'decimalRequired',
    'decreasing',
    'strictlyDecreasing',
    'timeDecreasing',
    'timeStrictlyDecreasing',
    'equals',
    'equalsAny',
    'future',
    'notFuture',
    'greaterThan',
    'greaterThanOrEqual',
    'increasing',
    'strictlyIncreasing',
    'timeIncreasing',
    'timeStrictlyIncreasing',
    'length',
    'lessThan',
    'lessThanOrEqual',
    'letterFormat',
    'match',
    'matchDates',
    'matchDictionary',
    'matchEntryDate',
    'matchFirstFieldToAnyOther',
    'minCharacters',
    'minLetters',
    'notContains',
    'notEquals',
    'notEqualsOrBlank',
    'notMatch',
    'numberFormat',
    'numberNonBlank',
    'plausibleEmail',
    'startsWith',
    'weekday',
    'xor',
    '--------ADVANCED CONSTRAINTS--------',
    'atLeastNonBlank',
    'atMostNonBlank',
    'noneMatch',
    'equalsState',
    'notEqualsState',
    'greaterThanState',
    'greaterThanOrEqualState',
    'lessThanState',
    'lessThanOrEqualState'
];

function NavArrowButton(props) {
    return (
        <Button onClick={() => {
            Actions.openDialog(props.dialogToOpen, { index:props.index, ...props.editCheck });
        }}
        ><img src={props.image}/></Button>
    );
}