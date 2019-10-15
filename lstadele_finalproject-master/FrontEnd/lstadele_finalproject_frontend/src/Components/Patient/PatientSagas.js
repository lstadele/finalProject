import { put, takeEvery, all } from 'redux-saga/effects';
import PatientConstants from './PatientConstants'
import * as PatientActions from './PatientActions';

// Domain watcher - triggered when below constants are used
export function* watchFetchPatients() {
    yield all([
        takeEvery(PatientConstants.FETCH_PATIENTS, handleFetchPatients)
    ]);
}

/**
 * Attempt to fetch customers
 */
function* handleFetchPatients() {
    let errors = [];
    let patients = [];
    //GET patients and handle any errors
    yield fetch(global.config.gcApiUrl + global.config.patientPath, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    })
        .then((response) => {
            errors = [];
            return response.json();
        }).then((data) => {
            errors = [];
            patients = data;
            patients.map((e) => {
                //Map through the address data to display it all in one column
                if (e.address) {
                    let addressArray = Object.values(e.address);
                    let addr = `${addressArray[0]}, `;
                    addr += `${addressArray[1]}, `;
                    addr += `${addressArray[2]} `;
                    addr += `${addressArray[3]}`;
                    e.address = addr;
                }
                return null;
            })
        })
        .catch((exception) => {
            errors.push('An unexpected error occurred. Please try again later.');
        });
    if (errors.length === 0) {
        yield put(PatientActions.fetchPatientsSuccess(true, patients));
    }
    else {
        yield put(PatientActions.fetchPatientsError(errors));
    }
}

// Domain watcher - triggered when below constants are used
export function* watchFetchPatientById() {
    yield all([
        takeEvery(PatientConstants.FETCH_PATIENT_BY_ID, handleFetchPatientById)
    ]);
}

/**
 * Attempt to fetch patient by ID
 * @param {*} action fetch patients
 */
function* handleFetchPatientById(action) {
    let errors = [];
    let patient = [];
    //GET patient and handle any errors
    yield fetch(global.config.gcApiUrl + global.config.patientPath + action.updateId, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json', 'mode': 'cors' }),
    })
        .then((response) => {
            errors = [];
            return response.json();
        })
        .then((data) => {
            errors = [];
            patient = data;
        })
        .catch((exception) => {
            errors.push('An unexpected error occurred. Please try again later.');
        })
    if (errors.length === 0) {
        yield put(PatientActions.updatePatientById(patient));
    }
    else {
        yield put(PatientActions.fetchPatientByIdError(errors));
    }
}

// Domain watcher - triggered when below constants are used
export function* watchFetchPatientDetailsById() {
    yield all([
        takeEvery(PatientConstants.FETCH_PATIENT_BY_ID, handleFetchPatientDetailsById)
    ]);
}

/**
 * Attempt to fetch patient by ID
 * @param {*} action fetch patients
 */
function* handleFetchPatientDetailsById(action) {
    let errors = [];
    let patient = [];
    //GET patients and handle any errors
    yield fetch(global.config.gcApiUrl + global.config.patientPath + action.patientId, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
        .then((response) => {
            errors = [];
            return response.json();
        })
        .then((data) => {
            errors = [];
            patient = data;
        })
        .catch((exception) => {
            errors.push('An unexpected error occurred. Please try again later.');
        })

    if (errors.length === 0) {
        yield put(PatientActions.fetchPatientByIdSuccess(true, patient));
    }
    else {
        yield put(PatientActions.fetchPatientByIdError(errors));
    }
}

// Domain watcher - triggered when below constants are used
export function* watchPostPatientSubmit() {
    yield all([
        takeEvery(PatientConstants.POST_PATIENT_SUBMIT, postPatientSubmit)
    ]);
}

/**
 * Attempt to add patient
 * @param {*} action add patient
 */
function* postPatientSubmit(action) {
    let addPatientErrors = [];
    try {
        //POST customer and handle any errors
        yield fetch(global.config.gcApiUrl + global.config.patientPath, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: action.body
        })
            //Show alert if the patient is successfully added to the database
            .then((response) => {
                if (response.ok) {
                    response.json();
                    addPatientErrors = [];
                }
                //Show error msg if the SSN is already in the database and the patient is not added
                else {
                    addPatientErrors.push("Error: Unable to Add Patient. The Social Security Number (SSN) entered is already in the database. Please enter a unique SSN.")
                }
            })
            .catch((exception) => {
                addPatientErrors.push('An unexpected error occurred. Please try again later.');
            });

        if (addPatientErrors.length === 0) {
            yield put(PatientActions.handleAddPatient(false, false));
            window.location.reload();
        }
        else {
            yield put(PatientActions.handleAddPatientErrors(addPatientErrors));
        }
    }
    catch {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const req = {
            headers: headers,
            method: 'POST',
            body: action.body
        };
        yield fetch(global.config.gcApiUrl + global.config.patientPath, req)
            .then((response) => {
                if (response.ok) {
                    response.json();
                    addPatientErrors = [];
                }
                //Show error msg if the SSN is already in the database and the patient is not added
                else {
                    addPatientErrors.push("Error: Unable to Add Patient. The Social Security Number (SSN) entered is already in the database. Please enter a unique SSN.")
                }
            })
            .catch((exception) => {
                addPatientErrors.push('An unexpected error occurred. Please try again later.');
            });
        if (addPatientErrors.length === 0) {
            yield put(PatientActions.handleAddPatient(false, false));
            window.location.reload();
        }
        else {
            yield put(PatientActions.handleAddPatientErrors(addPatientErrors));
        }
    }
}

// Domain watcher - triggered when below constants are used
export function* watchPutPatientSubmit() {
    yield all([
        takeEvery(PatientConstants.PUT_PATIENT_SUBMIT, putPatientSubmit)
    ]);
}

/**
 * Attempt to update patient by ID
 * @param {*} action update patient
 */
function* putPatientSubmit(action) {
    let editPatientErrors = [];
    //PUT patient and handle any errors
    yield fetch(global.config.gcApiUrl + global.config.patientPath + action.patientId, {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: action.body
    })
        //Show alert message if the patient is successfully added to the database
        .then((response) => {
            if (response.ok) {
                response.json();
                editPatientErrors = [];
            }
            //Show error message if the SSN is already in the database and the patient is not added
            else {
                editPatientErrors.push("Error: Unable to Edit Patient. The Social Security Number (SSN) entered is already associated with another patient in the database. Please enter a unique SSN.")
            }
        })
        .catch((exception) => {
            editPatientErrors.push('An unexpected error occurred. Please try again later.');
        });
    if (editPatientErrors.length === 0) {
        yield put(PatientActions.handleEditPatient(false, false));
        window.location.reload();
    }
    else {
        yield put(PatientActions.handleEditPatientErrors(editPatientErrors));
    }
}
//Domain watcher - triggered when below constants are used
export function* watchDeletePatientSubmit() {
    yield all([
        takeEvery(PatientConstants.DELETE_PATIENT_SUBMIT, deletePatientSubmit)
    ]);
}

/**
 * Attempt to delete patient by ID
 * @param {*} action delete patient
 */
function* deletePatientSubmit(action) {
    const errors = [];
    yield fetch(global.config.gcApiUrl + global.config.patientPath + action.patientId, {
        method: 'DELETE',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    }).catch((exception) => {
        errors.push('An unexpected error occurred. Please try again later.');
    });
    yield (handleFetchPatients());
}