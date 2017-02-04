import React, { Component } from 'react';

class Rocket extends Component {
	render() {
		return(
			<g>
		    <circle className="circle" cx="16.33" cy="16.33" r="15.33"/>
		    <line className="arrow" x1="16.33" y1="9.84" x2="16.33" y2="23.08"/>
		    <polyline className="arrow" points="9.75 16.5 16.33 9.91 22.92 16.5"/>
		  </g>
		);	
	}
}

class Bomb extends Component {
	render() {
		return(
			<g>
	      <circle className="circle" cx="16.33" cy="16.33" r="15.33"/>
		    <polyline className="path" points="9.75 23.08 16.33 16.5 22.92 23.08"/>
		    <polyline className="path" points="22.92 9.91 16.33 16.5 9.75 9.91"/>
		  </g>
		);
	}
}

class SvgButton extends Component {
	render() {
		return (
			<svg className={this.props.class} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.67 32.67">
				{this.props.type == 'rocket' && <Rocket />}
				{this.props.type == 'bomb' && <Bomb />}
			</svg>
		);
	}
}

export default SvgButton;