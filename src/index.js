import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import Assignment from './Components/Assignment/Assignment'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Person App" />, document.getElementById('root'));
// ReactDOM.render(<Assignment />, document.getElementById('root'));
registerServiceWorker();
