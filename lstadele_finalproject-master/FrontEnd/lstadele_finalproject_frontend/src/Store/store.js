import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { watchFetchPatients, watchFetchPatientById, watchFetchPatientDetailsById, watchPostPatientSubmit, watchPutPatientSubmit, watchDeletePatientSubmit } from '../Components/Patient/PatientSagas';


//Add sagas
const sagaMiddleware = createSagaMiddleware();

//Create reduces and middleware inside store
const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

//Look for Customer saga files
sagaMiddleware.run(watchFetchPatients);
sagaMiddleware.run(watchFetchPatientById);
sagaMiddleware.run(watchFetchPatientDetailsById);
sagaMiddleware.run(watchPostPatientSubmit);
sagaMiddleware.run(watchPutPatientSubmit);
sagaMiddleware.run(watchDeletePatientSubmit);


export default store;