import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/index';
import { ContextProviders } from './components/ContextProviders';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ContextProviders>
            <App />
        </ContextProviders>

    </Provider>
);


