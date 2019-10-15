import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { ButtonToolbar, Button } from 'react-bootstrap';
import AddPatient from './PostPatient';
import EditPatient from './EditPatient';
import * as PatientActions from './PatientActions';
import PropTypes from 'prop-types';
import PatientDetails from './PatientDetails';

/**
 * Patient table made with Material UI, references the AddPatient and UpdatePatient classes
 */


class Patient extends Component {
    constructor(props) {
        super(props);
        //functions for customer data
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleGet = this.handleGet.bind(this);
        this.handlePatientDetailsViews = this.handlePatientDetailsViews.bind(this);
    }

    /**
  * If the component mounts, get Patient data from the server
  */
    componentDidMount() {
        this.props.dispatch(PatientActions.handleFetchPatients());
    }

    /**
   *fetch patient data from the server
   */
    handleGet() {
        this.props.dispatch(PatientActions.handleFetchPatients());
        this.props.dispatch(PatientActions.handleAddPatient(false, false));
        this.props.dispatch(PatientActions.handleEditForm(false, false));
    }

    /**
   * View Patient Details Table on Click based on patient row id value
   * @param {*} value patient row id 
   */
    handlePatientDetailsViews(value) {
        this.props.dispatch(PatientActions.handlePatientDetails(value));
        this.props.dispatch(PatientActions.handleViewPatientDetails(true));
        this.props.dispatch(PatientActions.handleFetchPatients());
    }

    /**
    * Show the Add patient button/form
    */
    handleAdd = () => {
        const { add } = this.props.patients;
        if (add) { this.handleGet(); }
        else {
            this.props.dispatch(PatientActions.handleAddPatient(
                true,
                true
            ));
        }
    }

    /**
     * Show the Edit patient button/form
     * @param {*} value patient row id (data to be edited)
     */
    handleEdit = (value) => {
        const { edit } = this.props.patients;
        if (edit) { this.handleGet(); }
        else {
            this.props.dispatch(PatientActions.handleEditPatient(
                value
            ));
            new Promise(resolve => {
                setTimeout(() => {
                    this.props.dispatch(PatientActions.handleFetchPatientById(this.props.patients.updateId));
                    resolve();
                }, 1000)
            });
            new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 2000)
            });
            new Promise(resolve => {
                setTimeout(() => {
                    this.props.dispatch(PatientActions.handleEditForm(true, true));
                    resolve();
                }, 1500)
            }
            )
        }
    }

    //Styling for buttons
    marginStyle = {
        margin: '25px'
    };

    /**
     * Show the following...
     */
    render() {
        const { patients, errors, add, isAddOn, edit, isEditOn, view } = this.props.patients;
        if (!errors) {
            return (
                //Add button to toggle between patient table and form 
                //Edit button to toggle between patient table and form 
                <React.Fragment>
                    <span>
                        <ButtonToolbar>
                            <span> {isEditOn
                                ? null :
                                <Button style={this.marginStyle} variant="warning" onClick={this.handleAdd}>
                                    {isAddOn ? 'Return to Patient Table' : 'Add Patient'}
                                </Button>}
                            </span>
                            <span> {isAddOn || (!isAddOn && !isEditOn) ? null :
                                <Button style={this.marginStyle} variant="warning" onClick={this.handleEdit}>
                                    {isEditOn ? 'Return to Patient Table' : 'Edit Patient'}
                                </Button>}
                            </span>
                            <span> {view ?
                                <Button style={this.marginStyle} variant="warning" onClick={() => this.props.dispatch(PatientActions.handleViewPatientDetails(false))}>
                                    Return to Patient Table
                                </Button> : null}
                            </span>
                        </ButtonToolbar>
                    </span>
                    {view ? <PatientDetails /> :
                        add
                            ?
                            <AddPatient handleAdd={this.handleAdd} />
                            :
                            edit
                                ?
                                <EditPatient handleEdit={this.handleEdit} />
                                ://Show an editable customer table (add and edit functionality) when logged in as an admin
                                <MaterialTable
                                    //Clicking on the customer edit button shows the Edit Customer form for the customer in that row
                                    title="Super Health Inc. Patients"
                                    columns={[
                                        { title: 'Patient ID', field: 'patientId' },
                                        { title: 'First Name', field: 'patientFirstName' },
                                        { title: 'Last Name', field: 'patientLastName' },
                                        { title: 'Age', field: 'patientAge' },
                                        //{ title: 'Social Security #', field: 'patientSSN' },
                                        //{ title: 'Address', field: 'address' },
                                        // { title: 'Height', field: 'patientHeight' },
                                        // { title: 'Weight', field: 'patientWeight' },
                                        // { title: 'Insurance', field: 'patientInsurance' },
                                        // { title: 'Sex', field: 'patientSex' }
                                    ]}
                                    actions={[
                                        {
                                            icon: 'edit',
                                            tooltip: 'Edit',
                                            onClick: (event, rowData) => this.handleEdit(rowData.patientId)
                                        },
                                        {
                                            icon: 'delete',
                                            tooltip: 'Delete',
                                            onClick: (event, rowData) => this.props.dispatch(PatientActions.deletePatientSubmit(rowData.patientId))
                                        },
                                        {
                                            icon: 'add',
                                            tooltip: 'View Patient Details',
                                            onClick: (event, rowData) => this.handlePatientDetailsViews(rowData.patientId)
                                        }
                                    ]}
                                    data={patients}
                                />
                    }
                </React.Fragment>
            );
        }
        else if (errors) {
            return <div id='invalid'>
                <br />
                {errors}
            </div>
        }
    }
}

Patient.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        patients: state.patients

    };
};

export default connect(mapStateToProps)(Patient);