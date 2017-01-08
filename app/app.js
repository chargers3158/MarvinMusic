import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GlobalHeader from './components/Header/GlobalHeader';

// Redux imports
import { connect, Provider } from 'react-redux';
import store from './store';
import { fetchUser } from './actions/actions';

require("./stylesheets/main.scss");

@connect((store) => {
	return {
		state: store
	}
})

class Index extends Component {

	componentWillMount() {
		//this.props.dispatch(setApiKey('test'));
		this.props.dispatch(fetchUser());
	}

	render() {
		return (
			<main>
				<GlobalHeader />
			</main>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider> , 
app);