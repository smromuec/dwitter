import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Base from './base';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Base />, document.getElementById('root'));
registerServiceWorker();
