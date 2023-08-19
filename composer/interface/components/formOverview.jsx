import React from 'react';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import API from '../../data/api.js'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit,
    },
    popover: {
        pointerEvents: 'none',
    },
    popperClose: {
        pointerEvents: 'none',
    },
});

class FormOverview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            popperOpen: false,
            forceClose: false
        };
    }


    handlePopoverOpen(e) {
        //this.setState({ anchorEl: event.target });
        let anchor = e.target;
        //moving the mouse quickly causes a race condition with the API, and can result in an 'always open' state 
        //the overly complex callback structure below is to prevent that
        this.setState({
            forceClose: false
        }, () =>
                API.getFormDataDoc(this.props.formRef.refId, (data) => {
                    this.setState({
                        formData: data,
                        anchorEl: anchor
                    }, () => {
                        if (this.state.forceClose) {
                            this.setState({
                                anchorEl: null,
                                forceClose: false
                            })
                        }
                    })
                }
                ));
    };

    handlePopoverClose() {
        this.setState({ anchorEl: null, forceClose: true });
    };

    handlePopperOpen = () => {

    };

    handlePopperClose = () => {
        this.setState({ popperOpen: false });
    };

    render() {

        const { classes } = this.props;
        const { anchorEl, popperOpen } = this.state;
        const open = !!anchorEl;
        let stateColor = "#AAF";
        if (this.props.formRef.formStatus === 'published') {
            stateColor = "#F90";
        } else if (this.props.formRef.formStatus === 'live') {
            stateColor = "#5F5";
        }
        return (
            <span className="wrapper">
                <div className="statusIndicator" style={{ backgroundColor: stateColor }} onMouseOver={(e) => this.handlePopoverOpen(e)} onMouseLeave={(e) => this.handlePopoverClose(e)}>
                </div>
                <Popover
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={this.handlePopoverClose}
                    style={{ fontSize: '1.2em' }}
                    disableRestoreFocus
                >
                    <div style={{ maxWidth: '400px' }}>
                        {!!this.state.formData &&
                            <div>
                                <div className="formOverviewData">
                                    Status:
                                    <span style={{ backgroundColor: stateColor, padding: '5px', margin: '5px', borderRadius: '10px' }}>
                                        {this.props.formRef.formStatus}
                                    </span>
                                </div>
                                <div className="formOverviewData">
                                    Type: {this.props.formRef.formType}
                                </div>
                                <div className="formOverviewData">
                                    Can Edit: {this.state.formData.canEdit}
                                </div>
                                <div className="formOverviewData">
                                    Can View: {this.state.formData.canView}
                                </div>
                                <div className="formOverviewData">
                                    Database Name: {this.state.formData.formName}
                                </div>
                                {this.state.formData.onDemand &&
                                    <div className="formOverviewData">
                                        On-Demand
                                    </div>
                                }
                                {this.props.formRef.includeInFormLibrary &&
                                    <div className="formOverviewData">
                                        Included in the Form Library
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </Popover>
            </span>
        );
    }
};
export default withStyles(styles)(FormOverview);
