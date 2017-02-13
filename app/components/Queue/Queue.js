import React, { Component } from 'react';
import { connect } from 'react-redux';

import { useMarvinControls } from 'actions/actions';

import SvgButton from 'components/Misc/SvgButton';

import rocket from 'images/rockets.svg';
import bomb from 'images/bombs.svg';

const mapStateToProps = (state, ownProps) => {
	return {
		userId: state.user.user.id,
		song: state.song.song,
		controls: state.user.user.controls,
		rocketCount: state.user.user.controls.rockets,
		bombCount: state.user.user.controls.bombs,
		balance: state.user.user.controls.balance
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		useRocket: () => { dispatch({type: "USE_ROCKET"}); },
		useBomb: () => { dispatch({type: "USE_BOMB"}); },
		buySong: (id, price, previous) => { dispatch(useMarvinControls(id, 'balance', price, previous)) },
		resetUser: () => { dispatch({type: "RESET_USER_STATE"}); },
		resetBalance: () => { dispatch({type: "RESET_BALANCE"}); },
	};
};

class SongBlock extends Component {
	render() {
		return (
			<div className="song-block">
				<img src={this.props.song.albumArt} className="album-art" alt={this.props.song.album} />
				<div className="song-info">
					<h4>{this.props.song.name}</h4>
					<h5>{this.props.song.artist}</h5>
				</div>
				{this.props.type == "queue" &&
					<div className="queue-controls">
						<SvgButton type="rocket" class="rocket-default" />
						<SvgButton type="bomb" class="bomb-default" />
					</div>
				}
			</div>
		);
	}
}

class Queue extends Component {
	constructor() {
		super();
		this.state = {
			songPrice: 3
		}
	}
	
	buySong(price) {
		console.log(this.props.userId, price);
		this.props.buySong(this.props.userId, price, this.props.controls);
	}

	render() {
		return (
			<aside className="queue">
				<div className="up-next">
					<h5 className="queue-label">Up Next</h5>
					<SongBlock song={this.props.song} />
				</div>
				<div className="queue-list">
					<h5 className="queue-label">Queue</h5>
					<SongBlock song={this.props.song} type="queue" />
					<SongBlock song={this.props.song} type="queue" />


				</div>
				<h1>{this.props.rocketCount}</h1>
				{this.props.rocketCount > 0 ? 
					<button onClick={() => this.props.useRocket()}>Rocket</button>
				:
					<button disabled>No Rockets left</button>
				}
				<h1>{this.props.bombCount}</h1>
				{this.props.bombCount > 0 ? 
					<button onClick={() => this.props.useBomb()}>Bomb</button>
				:
					<button disabled>No Bombs left</button>
				}
				<hr/>

				<h1>{this.props.balance}</h1>
				{this.props.balance >= this.state.songPrice ? 
						<button onClick={() => this.buySong(this.state.songPrice)}>Buy ${this.state.songPrice} song</button>
				:
					<button disabled>Cant buy song</button>
				}
				<button onClick={() => this.props.resetUser()}>Reset</button>
				<button onClick={() => this.props.resetBalance()}>Rest Balance</button>
			</aside>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);