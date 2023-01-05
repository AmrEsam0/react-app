import React, { Component } from "react";

class Click extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hi",
		};
	}

	clickHandler = () => {
		this.setState({
			message: "Bye",
		});
	};

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default Click;
