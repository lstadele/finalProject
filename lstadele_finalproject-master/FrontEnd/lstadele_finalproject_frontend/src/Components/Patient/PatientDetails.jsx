import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import * as PatientActions from './PatientActions';
import PropTypes from 'prop-types';

/**
 * Patient Details table that shows more patient information and encounter info
 */
class PatientDetails extends React.Component {

    /**
  * If the component mounts, get Patient data from the server
  */
    componentDidMount() {
        this.loadPatient()
    }

    /**
       * Fetch patient data by id
       */
    loadPatient() {
        this.props.dispatch(PatientActions.handleFetchPatientDetailsById(this.props.patients.patientId))
    }

    //Button styling
    marginStyle = {
        margin: '25px'
    };

    /**
     * Show the following...
     */
    render() {
        const { patients } = this.props.patients
        //Show the Patient Details Page
        return (
            <span>
                <React.Fragment>
                    <MaterialTable
                        title="Patient Details"
                        columns={[
                            { title: 'Patient ID', field: 'patientId' },
                            { title: 'First Name', field: 'patientFirstName' },
                            { title: 'Last Name', field: 'patientLastName' },
                            { title: 'Social Security #', field: 'patientSSN' },
                            { title: 'Address', field: 'address' },
                            { title: 'Age', field: 'patientAge' },
                            { title: 'Height', field: 'patientHeight' },
                            { title: 'Weight', field: 'patientWeight' },
                            { title: 'Insurance', field: 'patientInsurance' },
                            { title: 'Sex', field: 'patientSex' }
                        ]}
                        data={patients}
                    />
                </React.Fragment></span>
        );
    }
}

PatientDetails.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        patients: state.patients

    };
};

export default connect(mapStateToProps)(PatientDetails);


