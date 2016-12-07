import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			text: "searchphrase",
			results: ["repo", "other stuff"]
		}
		this.update = this.update.bind(this)
		this.change = this.change.bind(this)
	}

	update(e){
		e.preventDefault();
		console.log("search");
		//use captured text to search, setState results to results, 
		//which will render Results
	}

	change(e){
		this.setState({text: e.target.value});
		console.log(this.state.text);
	}

	render(){
		return (
			<div>
				<Input update={this.update} change={this.change} />
			</div>
		)
	}
}

export default App