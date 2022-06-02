import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCSS from './assets/global.styles'
import {createStore} from "redux";
import rootReducer from "./store/reducers";
import {Provider} from "react-redux"


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalCSS/>
            <App/>
        </Provider>

    </React.StrictMode>
);

