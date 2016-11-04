import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GlobalHeader from './components/Header/GlobalHeader';

require("./stylesheets/main.scss");

class Index extends Component {
	render() {
		return (
			<main>
				<GlobalHeader />
			</main>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Index />, app);