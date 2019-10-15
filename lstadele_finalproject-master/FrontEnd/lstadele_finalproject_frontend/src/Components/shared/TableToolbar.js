import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

const styles = () => ({
    spacer: {
        flex: 'auto',
    },
    title: {
        flex: '0 0 auto',
    },
});

/** 
 * A simple toolbar used in the DomainTable which displays the table title,
 * as well as add, edit, and delete buttons.
 */
const TableToolbar = (props) => {

    const { classes, title, selected, addClicked, editClicked, deleteClicked, hideAdd } = props;

    return (
        <Toolbar>
            <div className={classes.title}>
                {selected.length > 0 ? (
                    <Typography color="inherit" variant="subheading">
                        {selected.length} selected
					</Typography>
                ) : (
                        <Typography variant="title" id="tableTitle">
                            {title}
                        </Typography>
                    )}
            </div>
            <div className={classes.spacer} />
            {selected.length > 0 ? (
                <div>
                    <Tooltip title="Edit">
                        <IconButton aria-label="Edit" onClick={editClicked}>
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete" onClick={deleteClicked}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            ) : (
                    <div>
                        {hideAdd ? ' ' :
                            <Tooltip title="Add">
                                <IconButton aria-label="Add" onClick={addClicked}>
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>
                        }
                    </div>
                )}
        </Toolbar>
    )
}

TableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.array.isRequired,
    addClicked: PropTypes.func.isRequired,
    editClicked: PropTypes.func.isRequired,
    deleteClicked: PropTypes.func.isRequired
};

export default withStyles(styles)(TableToolbar);