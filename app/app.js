import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GlobalHeader from 'components/Header/GlobalHeader';
import ActionPanel from 'components/ActionPanel/ActionPanel';
import Library from 'components/Library/Library';
import Queue from 'components/Queue/Queue';

// Redux imports
import { connect, Provider } from 'react-redux';
import store from 'store';
import { fetchUser } from 'actions/actions';

require("./stylesheets/main.scss");

@connect((store) => {
	return {
		state: store
	}
})

class Index extends Component {

	componentWillMount() {
		//this.props.dispatch(setApiKey('test'));
		// this.props.dispatch(fetchUser());
	}

	render() {
		return (
			<main>
				<GlobalHeader />
				<section className="app-content">
					<ActionPanel />
					<Library />
					<Queue />
				</section>
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