import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.css';
import './css/main.css';
import RouteLink from './config/route';
import * as serviceWorker from './serviceWorker';
import 'babel-polyfill';

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('core-js');

ReactDOM.render(<RouteLink />, document.getElementById('root'));

serviceWorker.unregister();