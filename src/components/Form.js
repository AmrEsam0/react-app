import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
		};
	}

	firstNameHandler = (event) => {
		this.setState({
			firstName: event.target.value,
		});
	};
	render() {
		return (
			<form>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						value={this.state.firstName}
						placeholder="First Name"
						onChange={(event) => this.firstNameHandler(event)}
					/>
				</div>
				<div>{this.state.firstName}</div>
			</form>
		);
	}
}

export default Form;
