import React, { Component } from 'react';
import { connect } from 'react-redux';

import userIcon from 'images/user.png';

const mapStateToProps = (state, ownProps) => {
	return {
		vote: state.user.user.statusVote,
		song: state.song.song
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		castVote: (vote) => { dispatch({type: "STATUS_VOTE", vote}); },
		decRating: (value) => { dispatch({type: "DECREASE_RATING", value}); },
		inRating: (value) => { dispatch({type: "INCREASE_RATING", value}); },
	};
};

class RateBar extends Component {
	render () {
		return (
			<div className={"score" + this.props.songRating}>
				<svg className="song-rating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.93 17.07">
				  <g id="score0">
				    <circle cx="8.54" cy="8.54" r="8.04"/>
				    <path d="M583.32,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score1">
				    <circle cx="32.89" cy="8.54" r="8.04"/>
				    <path d="M607.68,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score2">
				    <circle cx="57.25" cy="8.54" r="8.04"/>
				    <path d="M632,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score3">
				    <circle cx="81.61" cy="8.54" r="8.04"/>
				    <path d="M656.39,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score4">
				    <circle cx="105.96" cy="8.54" r="8.04"/>
				    <path d="M680.75,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score5">
				    <circle cx="130.32" cy="8.54" r="8.04"/>
				    <path d="M705.11,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score6">
				    <circle cx="154.68" cy="8.54" r="8.04"/>
				    <path d="M729.46,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score7">
				    <circle cx="179.03" cy="8.54" r="8.04"/>
				    <path d="M753.82,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				  <g id="score8">
				    <circle cx="203.39" cy="8.54" r="8.04"/>
				    <path d="M778.18,2490.17a7.54,7.54,0,1,1-7.54,7.54,7.55,7.55,0,0,1,7.54-7.54m0-1a8.54,8.54,0,1,0,8.54,8.54,8.54,8.54,0,0,0-8.54-8.54h0Z" transform="translate(-574.79 -2489.17)"/>
				  </g>
				</svg>
			</div>
		);
	}
}

class ActionPanel extends Component {

	render() {
		return (
			<aside className={"action-panel rating" + this.props.song.songRating}>
				<div className="now-playing">
					{this.props.song.songRating == 8 ?
						<h5 className="blue-font">Kickass Song Playing!</h5>
					:
						<div>
							{this.props.song.songRating == 0 ? 
								<h5 className="orange-font">Boooooo!</h5>
							:
								<h5 className="mid-gray-font">Now Playing</h5>
							}
						</div>
					}
					<img src={this.props.song.albumArt} alt={this.props.song.artist} />
				</div>
				<div className="song-data">
					<h4 className="song">{this.props.song.name}</h4>
					<h5 className="artist">{this.props.song.artist}</h5>
					<h5 className="album">{this.props.song.album}</h5>
				</div>
				<div className="added-by">
					<div className="info">
						<p>Added By:</p>
						<h5>{this.props.song.addedBy}</h5>
					</div>
					<img src={userIcon} alt={this.props.song.addedBy} />
				</div>
				<div className="song-actions">
					<div className="song-status">
						<h5>Song Status</h5>
						<RateBar songRating={this.props.song.songRating} />
					</div>
					{this.props.vote ? 
						<div>
							{this.props.vote == 'rocks' && 
								<div className="status-buttons">
									<button onClick={() => {this.props.decRating(2); this.props.castVote('sucks');}} className="sucks">Sucks</button>
									<button onClick={() => {this.props.decRating(1); this.props.castVote(null);}} className="rocks rocks-active">Rocks</button>
								</div>
							}
							{this.props.vote == 'sucks' && 
								<div className="status-buttons">
									<button onClick={() => {this.props.inRating(1); this.props.castVote(null);}} className="sucks sucks-active">Sucks</button>
									<button onClick={() => {this.props.inRating(2); this.props.castVote('rocks');}} className="rocks">Rocks</button>
								</div>
							}
						</div>
					:
						<div className="status-buttons">
							<button onClick={() => {this.props.decRating(1); this.props.castVote('sucks');}} className="sucks">Sucks</button>
							<button onClick={() => {this.props.inRating(1); this.props.castVote('rocks');}} className="rocks">Rocks</button>
						</div>
					}
				</div>
			</aside>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);