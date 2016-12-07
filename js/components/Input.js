import React from 'react';
import ReactDOM from 'react-dom';

const Input = (props) => {
	return (
		<form onSubmit={props.update}>
			<input type="text" onChange={props.change} />
		</form>
	);
};

export default Input;
