import React, { Component } from 'react';
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => {
	return {
		state: state,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
	};
};

class GlobalHeader extends Component {
	render() {
		return (
			<header>
				<h1>Marvin Music Application</h1>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);