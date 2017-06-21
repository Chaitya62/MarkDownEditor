import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import AppAPI from './utils/appAPI';

AppAPI.getText();

ReactDOM.render(
	< App />,
	document.getElementById('app')
);