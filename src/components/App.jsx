import React from 'react';
import axios from 'axios';
import Input from './Input.jsx';
import Results from './Results.jsx';
import './styles/App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			locationList: [],
			page: 'home',
			city: '',
			weatherData: {},
			unit: 'C'
		};
		this.getInput = this.getInput.bind(this);
		this.searchLocations = this.searchLocations.bind(this);
		this.chooseLocation = this.chooseLocation.bind(this);
		this.newSearch = this.newSearch.bind(this);
	}

	getInput(e) {
		e.preventDefault();
		this.setState({
			userInput: e.target.value
		});
	}

	searchLocations(e) {
		e.preventDefault();
		var query = '/search/' + this.state.userInput;
		axios.get(query)
		.then(response => {
			this.setState({
				locationList: response.data,
				page: 'list'
			});
		})
		.catch(error => {
			console.log('error.response: ', error.response);
		});
	}

	chooseLocation(e) {
		e.preventDefault();
		var url = '/data/' + e.target.id;
		var city = e.target.name;
		axios.get(url)
		.then(response => {
			this.setState({
				city: city,
				weatherData: response.data,
				page: 'results'
			});
		})
		.catch(error => {
			console.log('error.response: ', error.response);
		})
	}

	newSearch() {
		this.setState({
			userInput: '',
			locationList: [],
			page: 'home',
			city: '',
			weatherData: {}
		});
	}

	changeUnits() {
		if (this.state.unit === 'C') {
			this.setState({
				unit: 'F'
			});
		} else {
			this.setState({
				unit: 'C'
			});
		}
	}

	render() {
		var displayed = null;
		if (this.state.page === 'home' || this.state.page === 'list') {
			displayed = <Input page={this.state.page} 
												 getInput={this.getInput} 
												 searchLocations={this.searchLocations}
												 locationList={this.state.locationList}
												 chooseLocation={this.chooseLocation}/>;
		}
		if (this.state.page === 'results') {
			displayed = <Results city={this.state.city} weatherData={this.state.weatherData} newSearch={this.newSearch}/>;
		}
		return (
			<div className="page">
		  	{displayed}
		  </div>
		);
	}
}

export default App;