import React from 'react';
import axios from 'axios';
import Input from './Input.jsx';
import List from './List.jsx';
import Results from './Results.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			locationList: [],
			page: 'home',
			woeid: null
		};
		this.getInput = this.getInput.bind(this);
		this.searchLocations = this.searchLocations.bind(this);
		this.chooseLocation = this.chooseLocation.bind(this);
		this.newSearch = this.newSearch.bind(this);
	}

	getInput(e) {
		this.setState({
			userInput: e.target.value
		});
	}

	searchLocations() {
		var query = '/search/' + this.state.userInput;
		axios.get(query)
		.then(response => {
			this.setState({
				locationList: response.data,
				page: 'list'
			});
		})
		.catch(error => {
			console.log('error: ', error.response);
		});
	}

	chooseLocation(e) {
		this.setState({
			woeid: e.target.id,
			page: 'results'
		});
	}

	newSearch() {
		this.setState({
			userInput: '',
			locationList: [],
			page: 'home',
			woeid: null
		});
	}

	render() {
		var displayed = null;
		var searchBar = null;
		if (this.state.page === 'home' || this.state.page === 'list') {
			searchBar = <Input getInput={this.getInput} searchLocations={this.searchLocations}/>;
		}
		if (this.state.page === 'list') {
			displayed = <List locationList={this.state.locationList} chooseLocation={this.chooseLocation}/>;
		}
		if (this.state.page === 'results') {
			displayed = <Results newSearch={this.newSearch}/>;
		}
		return (
			<div>
				{searchBar}
		  	{displayed}
		  </div>
		);
	}
}

export default App;