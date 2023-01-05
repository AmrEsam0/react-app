import React from "react";

function Names() {
	const names = ["Dareen", "Dalia", "Amr"].map((name) => <h2>{name}</h2>);
	return <div>{names}</div>;
}

export default Names;
