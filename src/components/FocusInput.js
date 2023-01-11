import React, { Component } from "react";
import Input from "./Input";

export class FocusInput extends Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	clickHandler = () => {
		this.componentRef.current.focusInput();
	};

	render() {
		return (
			<div>
				<Input ref={this.componentRef} />
				<button onClick={this.clickHandler}>Focus that bitch</button>
			</div>
		);
	}
}

export default FocusInput;
