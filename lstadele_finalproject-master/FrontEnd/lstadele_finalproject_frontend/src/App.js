import React from 'react';
import './App.css';
import Patient from './Components/Patient/Patient';
import store from './Store/store';
import { Provider } from 'react-redux';

/**
 * Main App for Super Health Inc. Application
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>

          <Patient />

        </Provider>
      </header>
    </div>
  );
}

export default App;
