import PatientConstants from './PatientConstants';

const initState = {
    patients: [],
    //Handling errors
    errors: null,
    addPatientErrors: null,
    editPatientErrors: null,
    //Hiding all intial patient adding and editing functionality
    add: false,
    isAddOn: false,
    edit: false,
    isEditOn: false,
    //Blank patient fields
    patientId: '',
    patientFirstName: '',
    patientLastName: '',
    patientSSN: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    patientAge: '',
    patientHeight: '',
    patientWeight: '',
    patientInsurance: '',
    patientSex: '',
    //Blank patient object
    updateData: {},
    //hide view details initially 
    view: false,
    patient: []
}

/**
 * Handle patient actions
 * @param {*} state initial state
 * @param {*} action action to perform
 */
const PatientReducer = (state = initState, action) => {
    switch (action.type) {
        case PatientConstants.FETCH_PATIENTS: {
            return {
                ...state,
            };
        }

        case PatientConstants.FETCH_PATIENTS_SUCCESS: {
            return {
                ...state,
                bool: action.bool,
                patients: action.patients
            };
        }

        case PatientConstants.FETCH_PATIENTS_ERROR: {
            return {
                ...state,
                errors: action.errors
            };
        }

        case PatientConstants.FETCH_PATIENT_BY_ID: {
            return {
                ...state,
                updateId: action.patientId
            };
        }
        case PatientConstants.FETCH_PATIENT_DETAILS_BY_ID: {
            return {
                ...state,
                patientId: action.patientId
            };
        }

        case PatientConstants.FETCH_PATIENT_BY_ID_SUCCESS: {
            return {
                ...state,
                bool: action.bool,
                patient: action.patient
            };
        }

        case PatientConstants.FETCH_PATIENT_BY_ID_ERROR: {
            return {
                ...state,
                errors: action.errors
            };
        }

        case PatientConstants.UPDATE_PATIENT_BY_ID: {
            return {
                ...state,
                updateData:
                {
                    patientId: action.updateData.patientId,
                    patientFirstName: action.updateData.patientFirstName,
                    patientLastName: action.updateData.patientLastName,
                    patientSSN: action.updateData.patientSSN,
                    street: action.updateData.address.street,
                    city: action.updateData.address.city,
                    state: action.updateData.address.state,
                    zip: action.updateData.address.zip,
                    patientAge: action.updateData.patientAge,
                    patientHeight: action.updateData.patientHeight,
                    patientWeight: action.updateData.patientWeight,
                    patientInsurance: action.updateData.patientInsurance,
                    patientSex: action.updateData.patientSex,
                }
            };
        }

        case PatientConstants.HANDLE_INPUT_CHANGE: {
            return {
                ...state,
                [action.field]: action.value
            }
        }

        case PatientConstants.ADD_PATIENT: {
            return {
                ...state,
                add: action.add,
                isAddOn: action.isAddOn
            };
        }

        case PatientConstants.ADD_PATIENT_ERROR: {
            return {
                ...state,
                addPatientErrors: action.addPatientErrors,
            };
        }

        case PatientConstants.EDIT_PATIENT: {
            return {
                ...state,
                updateId: action.patientId,
            };
        }

        case PatientConstants.EDIT_FORM: {
            return {
                ...state,
                edit: action.edit,
                isEditOn: action.isEditOn
            };
        }

        case PatientConstants.EDIT_PATIENT_ERROR: {
            return {
                ...state,
                editPatientErrors: action.editPatientErrors,
            };
        }

        case PatientConstants.POST_PATIENT_SUBMIT: {
            return {
                ...state,
                body: action.body
            };
        }

        case PatientConstants.PUT_PATIENT_SUBMIT: {
            return {
                ...state,
                body: action.body
            };
        }

        case PatientConstants.DELETE_PATIENT_SUBMIT: {
            return {
                ...state,
                patientId: action.patientId
            };
        }

        case PatientConstants.EDIT_PATIENT_FIRST_NAME: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientFirstName: action.patientFirstName,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_LAST_NAME: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientLastName: action.patientLastName,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_SSN: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientSSN: action.patientSSN,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_STREET: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    street: action.street,
                }
            };
        }

        case PatientConstants.EDIT_PATIENT_CITY: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    city: action.city,
                }
            };
        }

        case PatientConstants.EDIT_PATIENT_STATE: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    state: action.state,
                }
            };
        }

        case PatientConstants.EDIT_PATIENT_ZIP: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    zip: action.zip,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_AGE: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientAge: action.patientAge,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_HEIGHT: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientHeight: action.patientHeight,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_WEIGHT: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientWeight: action.patientWeight,
                }
            };
        }
        case PatientConstants.EDIT_PATIENT_INSURANCE: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientInsurance: action.patientInsurance,
                }
            };
        }

        case PatientConstants.EDIT_PATIENT_SEX: {
            return {
                ...state,
                updateData:
                {
                    ...state.updateData,
                    patientSex: action.patientSex,
                }
            };
        }

        case PatientConstants.HANDLE_PATIENT_DETAILS: {
            return {
                ...state,
                patientId: action.patient.patientId
            };
        }

        case PatientConstants.HANDLE_VIEW_PATIENT_DETAILS: {
            return {
                ...state,
                view: action.view
            };
        }

        default:
            return state;
    }
}

export default PatientReducer;