import React from 'react'
import TableCell from './tableCell.jsx'
import {observer} from 'mobx-react'

@observer
class TableRow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
                <tr>
                  {this.props.cells.map((tableCell, idx) =>
                        <TableCell key={tableCell.id}
                        name={tableCell.name} columnIndex={idx} tableId={this.props.tableId} {...tableCell}>
                        </TableCell>
                    )}
                </tr>
                );
    }
}
export default TableRow;
