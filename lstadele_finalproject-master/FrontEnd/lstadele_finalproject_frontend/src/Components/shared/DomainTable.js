import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TableToolbar from './TableToolbar';
import * as DomainTableActions from './DomainTableActions';
import { connect } from 'react-redux';

/**
 * Styling for Domain Table
 * @param theme 
 */

const styles = (theme) => ({
    root: {
        margin: theme.spacing.unit * 3,
        overflowX: 'auto'
    },
    table: {
        minWidth: 700
    }
});

/**
 * A paginated component which displays a user friendly table
 * and buttons to enable creation, editing, and deletion of data.
 * */
class DomainTable extends Component {
	/**
	 * The method called when the select all button is clicked.
	 * @param event the event triggered by onChange
	 * @param checked the value of the checkbox used to set or
	 * reset the selected array
	 */
    handleSelectAll = (event, checked) => {
        const { idKey } = this.props;
        if (checked) {
            this.props.dispatch(DomainTableActions.domTabSelectAll(
                this.props.data.map(n => n[idKey])
            ));
        } else {
            this.props.dispatch(DomainTableActions.domTabSelectAll(
                []
            ));
        }
    };

	/**
	 * The method called when one row is selected.
	 * @param event the event triggered by onChange
	 * @param id the id of the customer that was selected
	 */
    handleSelect = (event, id) => {
        const { selected } = this.props.domainTable;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        this.props.dispatch(DomainTableActions.domTabSelectAll(
            newSelected
        ));
    }

    /** Calls the method passed to the component for creation */
    handleAdd = () => {
        this.props.create();
    }

    /** Calls the method passed to the component for editing */
    handleEdit = () => {
        this.props.edit(this.props.domainTable.selected);
    }

    /** Calls the method passed to the component for deleting */
    handleDelete = () => {
        this.props.destroy(this.props.domainTable.selected);
        this.props.dispatch(DomainTableActions.domTabSelectAll(
            []
        ));
    }

	/**
	 * Changes the current page of the table.
	 * @param event the event triggered by onChangePage 
	 * @param page the page which the table should move to
	 */
    handleChangePage = (event, page) => {
        this.props.dispatch(DomainTableActions.domTabChangePage(
            page
        ));
    };

	/**
	 * Changes the current rows per page when a new value is selected.
	 * @param event the event triggered by onChangeRowsPerPage
	 */
    handleChangeRowsPerPage = (event) => {
        this.props.dispatch(DomainTableActions.domTabChangeRows(
            event.target.value
        ));
    };

	/**
	 * Returns whether the id is currently in the selected array.
	 * @param id the id of a customer
	 */
    isSelected = (id) => this.props.domainTable.selected.indexOf(id) !== -1;

    render() {
        const { classes, data, title, headers, idKey, hideCheckbox } = this.props;
        const { selected, rowsPerPage, page } = this.props.domainTable;

        return (
            <Paper className={classes.root}>
                <TableToolbar title={title}
                    hideAdd={hideCheckbox}
                    selected={selected}
                    addClicked={this.handleAdd}
                    editClicked={this.handleEdit}
                    deleteClicked={this.handleDelete}
                />
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                {hideCheckbox ? ' ' :
                                    <Checkbox onChange={this.handleSelectAll}
                                        checked={selected.length === data.length} />
                                }
                            </TableCell>
                            {headers.map(header => {
                                return (
                                    <TableCell key={header}>{header}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(n => {
                                const isSelected = this.isSelected(n[idKey]);
                                return (
                                    <TableRow key={n[idKey]}>
                                        <TableCell padding="checkbox">
                                            {hideCheckbox ? ' ' :
                                                <Checkbox className="catCheck" style={{ color: 'grey' }} checked={isSelected}
                                                    onChange={(event) => this.handleSelect(event, n[idKey])} />
                                            }
                                        </TableCell>
                                        {this.props.populate(n)}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

DomainTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    idKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    headers: PropTypes.array.isRequired,
    populate: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {
        domainTable: state.domainTable
    };
};


export default connect(mapStateToProps)(withStyles(styles)(DomainTable));