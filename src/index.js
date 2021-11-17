import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import '../src/styles/app.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <FirebaseContext.Provider value={{ firebase, FieldValue }}>
                <App />
            </FirebaseContext.Provider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);