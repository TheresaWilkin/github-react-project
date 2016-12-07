import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Results from './Results';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			text: 'searchphrase',
			user: {username: ''},
			repos: []
		};
		this.update = this.update.bind(this);
		this.change = this.change.bind(this);
	}

	update (e) {
		e.preventDefault();
		let search = this.state.text;
		fetch(`https://api.github.com/users/${search}`)
		.then((response) => {
			if (!response.ok) {
				return Promise.reject(response.statusText);
			}
			return response.json();
		})
		.then((body) => {
			this.setState({user: {username: body.login}});
			// console.log(body);
			// console.log(this.state.results[0].username);
			return fetch(`https://api.github.com/users/${search}/repos`)
		})
		.then((response) => {
			if (!response.ok) {
				return Promise.reject(response.statusText);
			}
			return response.json();
		})
		.then((body) => {
			this.setState({repos: body});
			console.log(body);
			// console.log(this.state.results[0].username);
		})
		.catch(err => {
			console.error(err);
		});
	}

	change (e) {
		this.setState({text: e.target.value});
	}

	render () {
		return (
			<div>
			<Input update={this.update} change={this.change} />
			<Results user={this.state.user} repos={this.state.repos} />
			</div>
			);
	}
}

export default App;
