import React from 'react';
import Popover from '@material-ui/core/Popover';
import clsx from 'clsx';
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = createStyles((theme) => ({
  paper: {
      padding: theme.spacing.unit,
  },
  popover: {
      pointerEvents: 'none',
  },
  popperClose: {
      pointerEvents: 'none',
  },
  statusIndicator: {
    borderRadius: 7,
    width: 10,
    height: 10,
    border: '2px solid #555',
    backgroundColor: '#AAF',
    marginRight: 8
  },
  published: {
    backgroundColor: "#F90"
  },
  live: {
    backgroundColor: '#5F5'
  },
  none: {
    backgroundColor: '#AAA'
  }
}));

class GroupOverview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }


    handlePopoverOpen(e) {
        let anchor = e.target;
        this.setState({
            anchorEl: anchor,

        });
    };

    handlePopoverClose() {
        this.setState({ anchorEl: null });
    };

    render() {

        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = !!anchorEl;
        let count = {
            inWork: 0,
            published: 0,
            live: 0
        };
        let lowestStatus = this.props.group.formRefs.length > 0 ? 'live' : 'none';
        for (let formRef of this.props.group.formRefs) {
            if (!formRef.formStatus || formRef.formStatus === '' || formRef.formStatus === 'in-work') {
                lowestStatus = 'in-work';
                //console.log('status of form ' + formRef.name  + " AKA '" + formRef.id + "' was in-work");
                count.inWork++;
            }
            if (formRef.formStatus === 'published') {
                if (lowestStatus !== 'in-work') {
                    lowestStatus = 'published'
                }
                //console.log('status of form ' + formRef.name  + " AKA '" + formRef.id + "' was published");
                count.published++;
            }
            if (formRef.formStatus === 'live') {
                count.live++;
                //console.log('status of form ' + formRef.name  + " AKA '" + formRef.id + "' was live");
            }
        }

        return (
            <span>
              <div
                className={clsx({
                  [classes.statusIndicator]: true,
                  [classes.published]: lowestStatus === "published",
                  [classes.live]: lowestStatus === "live",
                  [classes.none]: lowestStatus === "none",
                })}
                onMouseOver={(e) => this.handlePopoverOpen(e)}
                onMouseLeave={(e) => this.handlePopoverClose(e)}
              />
                <Popover
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    onClose={this.handlePopoverClose}
                    style={{ fontSize: '1.2em' }}
                    disableRestoreFocus
                >
                    <div style={{ maxWidth: '400px' }}>
                        <div>
                            <div className="formOverviewData">
                                Status:
                            </div>
                            <div className="formOverviewData">
                                <div className="statusIndicator statusIndicatorLarge" style={{ backgroundColor: '#5F5'}}>{count.live}</div>
                                Live
                                </div>
                            <div className="formOverviewData">
                                <div className="statusIndicator statusIndicatorLarge" style={{ backgroundColor: '#F90'}}>{count.published}</div>
                                Published
                                </div>
                            <div className="formOverviewData">
                                <div className="statusIndicator statusIndicatorLarge" style={{ backgroundColor: '#AAF' }}>{count.inWork}</div>
                                In-Work
                                </div>
                            <div className="formOverviewData">
                                Database Name: {this.props.group.name}
                            </div>
                            {this.props.group.onDemand &&
                                <div className="formOverviewData">
                                    On-Demand
                                    </div>
                            }
                        </div>
                    </div>
                </Popover>
            </span>
        );
    }
};
export default withStyles(styles)(GroupOverview);
