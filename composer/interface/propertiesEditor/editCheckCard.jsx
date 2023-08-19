import React from 'react';
import {observer, inject} from 'mobx-react'
import {DialogType} from '../../dialogs/dialogTypes.js'
import Actions from '../../data/actions.js'
import ShareRulesButton from '../components/shareRulesButton.jsx'
import ButtonBase from '@material-ui/core/ButtonBase';
import { action } from "mobx";
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from "@material-ui/core/styles";
import ChevronUpIcon from '../../images/ChevronUpIcon.jsx';
import ChevronDownIcon from '../../images/ChevronDownIcon.jsx';
import CopyableEditCheckWrapper from '../components/CopyableEditCheckWrapper.jsx';

const styles = () => ({
  actionContainer: {
    display: 'flex'
  },
  editIcon: {
    marginLeft: 'auto'
  }
});

@inject("studyStore", "formStore")
@observer
class EditCheckCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.handleDuplicate = this.handleDuplicate.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  /**
   * Inserts a duplicate of this edit check and saves the form.
   */
  @action handleDuplicate() {
    try {
      let editChecks;
      let newEditCheckId = "";
      if (this.props.editCheck._type === "calculation") {
        editChecks = this.props.formStore.formData.calculations;
        newEditCheckId = this.props.formStore.getUniqueId(
          "calculation",
          "calculation_"
        );
      } else if (this.props.editCheck._type === "constraint") {
        editChecks = this.props.formStore.formData.constraints;
        newEditCheckId = this.props.formStore.getUniqueId(
          "constraint",
          "constraint_"
        );
      }

      editChecks.splice(this.props.index + 1, 0, {
        ...editChecks[this.props.index],
        id: newEditCheckId,
      });
      Actions.saveForm();
    } catch (e) {
      console.error("Error duplicating edit check: ", e);
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      collapsed: props.allCollapsed,
    };
  }
  
  render(){
    const { studyStore, classes } = this.props;
    const {editCheckType, _type, fields, value, attributes, triggers} = this.props.editCheck;
    const dialogToOpen = _type === 'constraint' ? DialogType.ADD_OR_EDIT_CONSTRAINT : DialogType.ADD_OR_EDIT_CALCULATION;

    return (
      <div className="editCheckCard"> 
        <CopyableEditCheckWrapper editCheck={this.props.editCheck}>       
          <div style={{ padding:10 }}>
            <h3 style={{ margin: "0 0 10px 0" }}>{editCheckType}</h3>          
            <div
              className="editCheckCardRemove"
              onClick={() =>
                Actions.removeEditCheck(
                  this.props.editCheck._type,
                  this.props.editCheck.id
                )
              }
            ></div>
            <div style={{ overflow: "auto" }}>
              {_type === "constraint" && (
                <div
                  key={"constraint_vals" + this.props.index}
                  style={{ margin: "10px" }}
                >
                  <table>
                    <tr><td>
                      <div style={{ overflowWrap: 'anywhere' }}>
                        <span style={{ fontWeight: "bold" }}>{"fields: "}</span>
                        {fields.replaceAll(',', ', ')}
                      </div>
                    </td></tr>
                    {value && <tr><td>
                      <div style={{ overflowWrap: 'anywhere' }}>
                        <span style={{ fontWeight: "bold" }}>{"value: "}</span>
                        {value}
                      </div>
                    </td></tr>}
                  </table>
                </div>
              )}
              {_type === "calculation" && (
                <div>
                  <div style={{ overflowWrap: 'anywhere' }}>
                    <span style={{ fontWeight: "bold" }}>calculatedField:</span>{" "}
                    {attributes["calculatedField"]}
                  </div>
                  <div>
                    <span style={{ fontWeight: "bold" }}>priority:</span>{" "}
                    {attributes["priority"]}
                  </div>
                </div>
              )}
              <div className={classes.actionContainer}>
                <ShareRulesButton element={this.props.editCheck} />
                {!studyStore.readonlyMode && (
                  <ButtonBase size="small" onClick={this.handleDuplicate}>
                    <img
                      src={"/global/composer/images/copy.png"}
                      width="15"
                      height="15"
                    />
                  </ButtonBase>
                )}
                <ButtonBase size="small" onClick={this.handleCollapse}>
                  {this.state.collapsed ? (
                    <ChevronUpIcon color="secondary" />
                  ) : (
                    <ChevronDownIcon color="secondary" />
                  )}
                </ButtonBase>
                <div className={classes.editIcon}>
                  <div
                    className="editTableCell"
                    onClick={() =>
                      Actions.openDialog(dialogToOpen, { index:this.props.index, ...this.props.editCheck })
                    }
                  ></div>
                </div>
              </div>
              <Collapse in={this.state.collapsed} timeout="auto" unmountOnExit>
                {_type === "calculation" && (
                  <div key={"calc_attrs"} style={{ margin: "10px" }}>
                    {Object.keys(attributes).map((attr, index) => {
                      if (attr !== "priority" && attr !== "calculatedField") {
                        return (
                          <div
                            key={"attr_" + attr + index}
                            style={{ display: "block", overflowWrap: 'anywhere' }}
                          >
                            <span style={{ fontWeight: "bold" }}>{attr}:</span>{" "}
                            {'fields' == attr ? attributes[attr].replaceAll(',', ', ') : attributes[attr]}
                          </div>
                        );
                      } else {
                        return;
                      }
                    })}
                  </div>
                )}
                <div>
                  {triggers.length > 0 && (
                    <div>
                      <b>Triggers:</b>
                      <div style={{ textAlign: "center" }}>
                        <table style={{ margin: "10px" }}>
                          <tbody>
                            <tr>
                              <td>
                                <b>Type</b>
                              </td>
                              <td>
                                <b>Fields</b>
                              </td>
                              <td>
                                <b>Value</b>
                              </td>
                            </tr>
                            {triggers.map((trigger, index) => (
                              <tr key={"trigger_" + trigger.id}>
                                <td>
                                  <b>{trigger.triggerType}</b>
                                </td>
                                <td><div style={{ overflowWrap: 'anywhere' }}>{trigger.fields.replaceAll(',', ', ')}</div></td>
                                <td><div style={{ overflowWrap: 'anywhere' }}>{trigger.value}</div></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </Collapse>
            </div>
          </div>  
        </CopyableEditCheckWrapper>
      </div>
    );
  }
}

export default withStyles(styles)(EditCheckCard);