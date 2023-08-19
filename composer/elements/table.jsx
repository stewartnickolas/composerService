import React from 'react'
import TableRow from './tableRow.jsx'
import {observer} from 'mobx-react'
import {DragSource, DropTarget} from 'react-dnd'
import {DND_Type} from '../interface/dndTypes.js'
import DragUtils from '../interface/dragUtils.js'
import Actions from '../data/actions.js'
import {DialogType} from '../dialogs/dialogTypes.js'
import ShareRulesButtonTable from '../interface/components/shareRulesButtonTable.jsx'
import CopyableTableWrapper from '../interface/components/CopyableTableWrapper.jsx'
import { TableData } from '../data/formStore.js'
import ColumnHeader from "../interface/components/ColumnHeader.jsx";
import ColumnMove from "../interface/components/ColumnMove.jsx";
import ColumnDragLayer from "../interface/components/ColumnDragLayer.jsx";

@observer
class Table extends React.Component{

    constructor(props){
        super(props);
    }

    calcStyle(props){
        let style = {};
        style.width = props.width === '' ? '100%' : props.width;
        if(props.width !== '100%'){
            style.display = 'inline-block';
        }
        return style;
    }

    render(){
        const {connectDragSource, connectDropTarget} = this.props;
        const rows = this.props.tableRows.map((tableRow) =>
                <TableRow key={tableRow.id} name={tableRow.name} tableId={this.props.id} {...tableRow}>
                </TableRow>
            );
      const headers = this.props.columnHeaders.map((header, idx) =>
            <ColumnHeader key={"header_" + idx} columnIndex={idx} tableId={this.props.id} header={header}/>
        );

      const moveCols = this.props.tableRows[0].cells.map((c, idx) =>
          <ColumnMove key={"moveCol_" + idx} columnIndex={idx} tableId={this.props.id}/>
      );

        const appDisplay = !!this.props.controlDisplayField ? "appDisplayBackgroundTable" : "";

        /**
         * this.props has extraneous attributes that do
         * not belong to a TableData object. So we enumerate
         * the properties here to create a proper TableData object.
         */
        let tableData = new TableData();
        for (let key in tableData) {
          tableData[key] = this.props[key];
        }

        return(
          <div>
            <CopyableTableWrapper table={tableData}>
              <div className="tableHandle"></div><div className="tableEditBtn" onClick={() => Actions.openDialog(DialogType.ADD_OR_EDIT_TABLE, this.props)}/>
                <ShareRulesButtonTable element={this.props} />
                <table style={this.calcStyle(this.props)} className={"editTable " + appDisplay}>
                  <thead>
                  {moveCols.length > 1 && <tr><td><ColumnDragLayer tableId={this.props.id}/></td></tr>}
                  {moveCols.length > 1 && <tr>{moveCols}</tr>}
                  {this.props.columnHeaders.length > 0 && <tr>{headers}</tr>}
                  </thead>
                  <tbody>
                    {rows}
                  </tbody>
                </table>
              </CopyableTableWrapper>
          </div>
        );
    }
}

export default Table;
