import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap.native';
import 'css/globalStyles';

render(<App />, document.getElementById('app'));
