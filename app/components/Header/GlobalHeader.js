import React, { Component } from 'react';
import { connect } from 'react-redux';

import userIcon from 'images/user.png';
import balance from 'images/balance.svg';
import rockets from 'images/rockets.svg';
import bombs from 'images/bombs.svg';


const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.user,
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
				<h1 className="marvin-title">Marvin</h1>
				<div className="header-toolbar">

					<div className="user-info">
						<div className="username-container">
							<p className="hello">Hello,</p>
							<h4 className="username">{this.props.user.name}</h4>	
						</div>
						<div className="username-image">
							<img src={userIcon} alt={this.props.user.name} />
						</div>
					</div>

					<div className="user-status">
						<div className="balance">
							<img src={balance} className="header-icon" alt="Balance" />
							<span className="object-count">{this.props.user.controls.balance}</span>
						</div>
						<div className="rockets">
							<img src={rockets} className="header-icon" alt="Rockets" />
							<span className="object-count">{this.props.user.controls.rockets}</span>
						</div>
						<div className="bombs">
							<img src={bombs} className="header-icon" alt="Bombs" />
							<span className="object-count">{this.props.user.controls.bombs}</span>
						</div>
					</div>

				</div>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);