//Create an action for each constant

import PatientConstants from './PatientConstants';

/**
 * Try fetching Patients
 */
export const handleFetchPatients = () => {
    return {
        type: PatientConstants.FETCH_PATIENTS,
    }
}

/**
 * Try saving fetched patients, update patient state if fetch is succesful
 * @param {*} bool boolean = success or failure
 * @param {*} patients object(s) gotten during fetch 
 */
export const fetchPatientsSuccess = (bool, patients) => {
    return {
        type: PatientConstants.FETCH_PATIENTS_SUCCESS,
        bool: bool,
        patients: patients
    }
}

/**
 * Throw any errors from fetching patients
 * @param {*} errors any error messages produced during fetch attempt
 */
export const fetchPatientsError = (errors) => {
    return {
        type: PatientConstants.FETCH_PATIENTS_ERROR,
        errors: errors
    }
}

/**
 * Try fetching patient by ID
 * @param {*} value ID of patient to fetch
 */
export const handleFetchPatientById = (value) => {
    return {
        type: PatientConstants.FETCH_PATIENT_BY_ID,
        updateId: value
    }
}

/**
 * Try fetching patient details by ID
 * @param {*} value ID of patient to fetch
 */
export const handleFetchPatientDetailsById = (value) => {
    return {
        type: PatientConstants.FETCH_PATIENT_DETAILS_BY_ID,
        patientId: value
    }
}

/**
 * Try saving fetched patients, update patient state if fetch is succesful
 * @param {*} bool boolean = success or failure
 * @param {*} patient object(s) gotten during fetch 
 */
export const fetchPatientByIdSuccess = (bool, patient) => {
    return {
        type: PatientConstants.FETCH_PATIENT_BY_ID_SUCCESS,
        bool: bool,
        patient: patient
    }
}

/**
 * Throw any errors from fetching patient by ID
 * @param {*} errors any error messages produced during fetch attempt
 */
export const fetchPatientByIdError = (errors) => {
    return {
        type: PatientConstants.FETCH_PATIENT_BY_ID_ERROR,
        errors: errors
    }
}

/**
 * Try storing current patient data, to use in update form
 * @param {*} value current data associated with selected patient
 */
export const updatePatientById = (value) => {
    return {
        type: PatientConstants.UPDATE_PATIENT_BY_ID,
        updateData: value
    }
}

/**
 * Try adding patient
 * @param {*} add boolean, toggle between Patient table and Add Patient form
 * @param {*} isAddOn boolean, toggle for button "Add Patient : Return to Patient Table"
 */
export const handleAddPatient = (add, isAddOn) => {
    return {
        type: PatientConstants.ADD_PATIENT,
        add: add,
        isAddOn: isAddOn
    }
}

/**
 * Handle adding patient errors
 * @param {*} addPatientErrors any error messages produced during add attempt
 */
export const handleAddPatientErrors = (addPatientErrors) => {
    return {
        type: PatientConstants.ADD_PATIENT_ERROR,
        addPatientErrors: addPatientErrors,
    }
}

/**
 * Try updating patient
 * @param {*} patientId = id of the patient to update
 */
export const handleEditPatient = (patientId) => {
    return {
        type: PatientConstants.EDIT_PATIENT,
        patientId: patientId,
    }
}

/**
 * Handle editing patient errors
 * @param {*} editPatientErrors any error messages produced during edit attempt
 */
export const handleEditPatientErrors = (editPatientErrors) => {
    return {
        type: PatientConstants.EDIT_PATIENT_ERROR,
        editPatientErrors: editPatientErrors,
    }
}

/** 
 * Handle state changes associated with toggling between Edit Patient form and Patient Table
* @param {*} edit boolean, toggle between Patient table and Edit Patient form
* @param {*} isEditOn boolean, toggle for button "Edit Patient : Return to Patient Table"
*/
export const handleEditForm = (edit, isEditOn) => {
    return {
        type: PatientConstants.EDIT_FORM,
        edit: edit,
        isEditOn: isEditOn
    }
}

/**
 * this action is for handling the state changes when someone is putting new information in the add or edit form
 */
export const handlePatientChange = (name, value) => {
    return {
        type: PatientConstants.HANDLE_INPUT_CHANGE,
        field: name,
        value: value
    }
}

/**
 * Try adding patient data
 * @param {*} value patient data
 */
export const postPatientSubmit = (value) => {
    return {
        type: PatientConstants.POST_PATIENT_SUBMIT,
        body: value
    }
}

/**
 * Try updating patient data
 * @param {*} patientId = id of patient to update
 * @param {*} body updated patient data
 */
export const putPatientSubmit = (patientId, body) => {
    return {
        type: PatientConstants.PUT_PATIENT_SUBMIT,
        patientId: patientId,
        body: body
    }
}

/**
 * Try deleting patient data
 * @param {*} value = patientId of patient to delete
 */
export const deletePatientSubmit = (value) => {
    return {
        type: PatientConstants.DELETE_PATIENT_SUBMIT,
        patientId: value
    }
}

/**
 * Save first name input to Edit Patient form
 * @param {*} value first name input
 */
export const handleEditPatientFirstName = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_FIRST_NAME,
        patientFirstName: value
    }
}
/**
 * Save last name input to Edit Patient form
 * @param {*} value last name input
 */
export const handleEditPatientLastName = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_LAST_NAME,
        patientLastName: value
    }
}
/**
 * Save SSN input to Edit Patient form
 * @param {*} value SSN name input
 */
export const handleEditPatientSSN = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_SSN,
        patientSSN: value
    }
}
/**
 * Save street input to Edit Patient form 
 * @param {*} value street input
 */
export const handleEditPatientStreet = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_STREET,
        street: value
    }
}

/**
 * Save city input to Edit Patient form  * 
 * @param {*} value city input
 */
export const handleEditPatientCity = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_CITY,
        city: value
    }
}

/**
 * Save state input to Edit Patient form 
 * @param {*} value state input
 */
export const handleEditPatientState = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_STATE,
        state: value
    }
}

/**
 * Save zip input to Edit Patient form
 * @param {*} value zip input
 */
export const handleEditPatientZip = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_ZIP,
        zip: value
    }
}

/**
 * Save age input to Edit Patient form
 * @param {*} value age input
 */
export const handleEditPatientAge = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_AGE,
        patientAge: value
    }
}
/**
 * Save height input to Edit Patient form
 * @param {*} value height input
 */
export const handleEditPatientHeight = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_HEIGHT,
        patientHeight: value
    }
}

/**
 * Save weight input to Edit Patient form
 * @param {*} value weight input
 */
export const handleEditPatientWeight = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_WEIGHT,
        patientWeight: value
    }
}

/**
 * Save insurance input to Edit Patient form
 * @param {*} value insurance input
 */
export const handleEditPatientInsurance = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_INSURANCE,
        patientInsurance: value
    }
}

/**
 * Save sex input to Edit Patient form
 * @param {*} value sex input
 */
export const handleEditPatientSex = (value) => {
    return {
        type: PatientConstants.EDIT_PATIENT_SEX,
        patientSex: value
    }
}

/**
 * Try viewing patient details
 * @param {*} value patient row id 
 */
export const handlePatientDetails = (patient) => {
    return {
        type: PatientConstants.HANDLE_PATIENT_DETAILS,
        patient: patient
    }
}

/**
 * Try viewing patient table
 * @param {*} view boolean, toggle between Patient table and Patient Details table
 */
export const handleViewPatientDetails = (view) => {
    return {
        type: PatientConstants.HANDLE_VIEW_PATIENT_DETAILS,
        view: view
    }
}