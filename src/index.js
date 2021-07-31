import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import dataStore from './store/index';

ReactDOM.render(
<Provider store={dataStore}>
    <App />
</Provider>, 
document.getElementById('root'));
