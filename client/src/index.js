import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

window.axios = axios;

ReactDOM.render(<App />, document.querySelector('#root'));
