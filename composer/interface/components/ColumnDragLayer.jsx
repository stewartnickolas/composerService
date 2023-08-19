import React from 'react'
import {DragLayer} from "react-dnd";
import {inject} from "mobx-react";
import TableCell from "../../elements/tableCell.jsx";
import {DND_Type} from "../dndTypes";

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 50,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: .8
};

const getPositionStyles = (props) => {
  const { currentOffset } = props;
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};

const collect = (monitor) => ({
  item: monitor.getItem(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
});

@inject('formStore')
class ColumnDragLayer extends React.Component {

  constructor(props){
    super(props);
    this.table = props.formStore.findNode('table', props.tableId);
  }

  render() {
    const {item, tableId, isDragging} = this.props;
    if (!isDragging || item.dragType != DND_Type.COLUMN || item.tableId != tableId) {
      return null;
    }

    let rows = <tr/>
    if (this.table!= undefined)
      rows = this.table.tableRows.map((tableRow, idx) => {
        return(
            <tr key={"tr_"+idx}>
              <td>
              <TableCell key={tableRow.cells[item.columnIndex].id}
                         name={tableRow.cells[item.columnIndex].name} columnIndex={idx} tableId={tableId} {...tableRow.cells[item.columnIndex]}>
              </TableCell>
              </td>
            </tr>
        )
      });

    return (
        <div style={layerStyles}>
          <div style={getPositionStyles(this.props)}>
            <table>
              {this.table.columnHeaders.length > 0 &&
              <tr><td className="heading_medium center">{this.table.columnHeaders[item.columnIndex]}</td></tr>}
              {rows}
            </table>
          </div>
        </div>
    );
  }
}

export default DragLayer(collect)(ColumnDragLayer);