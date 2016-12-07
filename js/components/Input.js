import React from 'react';
import ReactDOM from 'react-dom';

// Change to refs implementation
class Input extends React.Component {
	render(props) {
	return (
		<form onSubmit={this.props.update}>
			<input ref="input" type="text" onChange={this.props.change} />
			<button type="submit">Search</button>
		</form>
	);
}
};

export default Input;
