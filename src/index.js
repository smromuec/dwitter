import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile';
import registerServiceWorker from './registerServiceWorker';
import * as Messages from './core/UIMessages';

ReactDOM.render(<Profile />, document.getElementById('root'));
registerServiceWorker();
