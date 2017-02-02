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
	constructor() {
		super();
		this.state = {
			username: 'Topher Young'
		}
	}
	render() {
		return (
			<header>
				<h1 className="marvin-title">Marvin</h1>
				<div className="header-toolbar">
					<div className="username-container">
						<p className="hello">Hello,</p>
						<p className="username">{this.state.username}</p>			
					</div>
					<div className="username-img">
						Circle
					</div>
				</div>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);