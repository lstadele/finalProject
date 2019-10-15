import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Form, Col, Button } from 'react-bootstrap';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import * as PatientActions from './PatientActions';
import { makeStyles } from '@material-ui/core/styles';

//Styling for form
const classes = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


/**
 * Edit Customer form with validation
 */

class EditPatient extends React.Component {
    constructor(props) {
        super(props);
        //Edit functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Save inputs from update patient form
     * @param {*} event = when values are entered in the form input fields
     */
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'patientFirstName') {
            this.props.dispatch(PatientActions.handleEditPatientFirstName(value));
        }
        if (name === 'patientLastName') {
            this.props.dispatch(PatientActions.handleEditPatientLastName(value));
        }
        if (name === 'patientSSN') {
            this.props.dispatch(PatientActions.handleEditPatientSSN(value))
        }
        if (name === 'street') {
            this.props.dispatch(PatientActions.handleEditPatientStreet(value))
        }
        if (name === 'city') {
            this.props.dispatch(PatientActions.handleEditPatientCity(value))
        }
        if (name === 'state') {
            this.props.dispatch(PatientActions.handleEditPatientState(value))
        }
        if (name === 'zip') {
            this.props.dispatch(PatientActions.handleEditPatientZip(value))
        }
        if (name === 'patientAge') {
            this.props.dispatch(PatientActions.handleEditPatientAge(value))
        }
        if (name === 'patientHeight') {
            this.props.dispatch(PatientActions.handleEditPatientHeight(value))
        }
        if (name === 'patientWeight') {
            this.props.dispatch(PatientActions.handleEditPatientWeight(value))
        }
        if (name === 'patientInsurance') {
            this.props.dispatch(PatientActions.handleEditPatientInsurance(value))
        }
        if (name === 'patientSex') {
            this.props.dispatch(PatientActions.handleEditPatientSex(value))
        }
    }

    // handleChange = (name) => (event) => {
    //     this.props.dispatch(PatientActions.handleEditPatientChange(
    //         name,
    //         event.target.value,
    //     ));
    // };

    /**
     * On save button click, save patient data to the server
     * @param {*} event = when save button is clicked on the update patient form
     */
    handleSubmit(event) {
        event.preventDefault();
        this.onFormSubmit(this.props.patients.updateData);
    }

    /**
     * Fetch the token and put to the patient database 
     * @param {*} data = values input in the update patient form
     */
    onFormSubmit(data) {
        const patientId = this.props.patients.updateData.patientId
        const body = JSON.stringify({
            patientFirstName: data.patientFirstName,
            patientLastName: data.patientLastName,
            patientSSN: data.patientSSN,
            address: {
                street: data.street,
                city: data.city,
                state: data.state,
                zip: data.zip
            },
            patientAge: data.patientAge,
            patientHeight: data.patientHeight,
            patientWeight: data.patientWeight,
            patientInsurance: data.patientInsurance,
            patientSex: data.patientSex
        });
        this.props.dispatch(PatientActions.putPatientSubmit(patientId, body))
    }

    //Table styling
    marginStyle = {
        margin: '25px'
    };


    /*
     * Show the following form and inputs with validation...
     * The form is auto-populated with the exisiting customer data
     */
    render() {
        const { patientFirstName, patientLastName, patientSSN, street, city, state, zip, patientAge,
            patientHeight, patientWeight, patientInsurance, patientSex } = this.props.patients.updateData;
        const { editPatientErrors } = this.props.patients
        return (
            <div style={this.marginStyle}>
                <h4>Edit Patient</h4>
                <h8>* Indicates a Required Field</h8>
                <br />
                <br />
                <Row>
                    <Col sm={6}>
                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <Form.Group controlId="patientFirstName">
                                <TextValidator
                                    label="First Name*"
                                    type="text"
                                    name="patientFirstName"
                                    validators={['required', 'matchRegexp:^[A-Za-z]{1,}$']}
                                    errorMessages={['Required Field', 'Must Only Be Letters']}
                                    value={patientFirstName}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientLastName">
                                <TextValidator
                                    label="Last Name*"
                                    type="text"
                                    name="patientLastName"
                                    validators={['required', 'matchRegexp:^[A-Za-z]{1,}$']}
                                    errorMessages={['Required Field', 'Must Only Be Letters']}
                                    value={patientLastName}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientSSN">
                                <TextValidator
                                    label="SSN(Social Security Number)*"
                                    type="text"
                                    name="patientSSN"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={patientSSN}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="street">
                                <TextValidator
                                    label="Street*"
                                    type="text"
                                    name="street"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={street}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="city">
                                <TextValidator
                                    label="City*"
                                    type="text"
                                    name="city"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={city}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="state">
                                <TextValidator
                                    label="State*"
                                    type="text"
                                    name="state"
                                    validators={['required', 'matchRegexp:^(AL|AK|AR|AZ|CA|CO|CT|DC|DE|FL|GA|HI|IA|ID|IL|IN|KS|KY|LA|MA|MD|ME|MI|MN|MO|MS|MT|NC|ND|NE|NH|NJ|NM|NV|NY|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VA|VT|WA|WI|WV|WY)$']}
                                    errorMessages={['Required Field', 'Must Be a 2 Digit Uppercase US State Abbreviation']}
                                    value={state}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="zip">
                                <TextValidator
                                    label="Zip*"
                                    type="text"
                                    name="zip"
                                    validators={['required', 'matchRegexp:^[0-9]{5}$']}
                                    errorMessages={['Required Field', 'Must Be in ##### Format']}
                                    value={zip}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientAge">
                                <TextValidator
                                    label="Age*"
                                    type="text"
                                    name="patientAge"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={patientAge}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientHeight">
                                <TextValidator
                                    label="Height*"
                                    type="text"
                                    name="patientHeight"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={patientHeight}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientWeight">
                                <TextValidator
                                    label="Weight*"
                                    type="text"
                                    name="patientWeight"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={patientWeight}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientInsurance">
                                <TextValidator
                                    label="Insurance*"
                                    type="text"
                                    name="patientInsurance"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={patientInsurance}
                                    onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="patientSex">
                                <TextValidator
                                    label="Sex*"
                                    type="text"
                                    name="patientSex"
                                    validators={['required']}
                                    errorMessages={['Required Field']}
                                    value={patientSex}
                                    onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group>
                                <Button variant="warning"
                                    type="submit"
                                >Register</Button>
                            </Form.Group>
                        </ValidatorForm>
                    </Col>
                </Row>
                <div>
                    {
                        editPatientErrors ?
                            <div id='invalid'>
                                <br />
                                {editPatientErrors}
                            </div> :
                            ''
                    }
                </div>
            </div>
        )
    }
}

EditPatient.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        patients: state.patients
    };
};

export default connect(mapStateToProps)(EditPatient);