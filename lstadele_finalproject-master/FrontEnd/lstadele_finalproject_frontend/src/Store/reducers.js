import { combineReducers } from 'redux';
import PatientReducer from '../Components/Patient/PatientReducers';
import DomainTableReducer from '../Components/shared/DomainTableReducers';

//combines all my reducers
const defaultReducers = combineReducers({
    patients: PatientReducer,
    domainTable: DomainTableReducer
});

export default defaultReducers;