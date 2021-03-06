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
			unitTemp: 'C', //or 'F'
			unitSpeed: 'mph' //or 'km/h'
		};
		this.getInput = this.getInput.bind(this);
		this.toggleTempUnit = this.toggleTempUnit.bind(this);
		this.toggleSpeedUnit = this.toggleSpeedUnit.bind(this);
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

	toggleTempUnit(e) {
		e.preventDefault();
		this.setState({
			unitTemp: this.state.unitTemp === 'C' ? 'F' : 'C'
		});
	}

	toggleSpeedUnit(e) {
		e.preventDefault();
		this.setState({
			unitSpeed: this.state.unitSpeed === 'mph' ? 'km/h' : 'mph'
		});
	}

	searchLocations(e) {
		e.preventDefault();
		const query = '/search/' + this.state.userInput;
		axios.get(query)
		.then(response => {
			if (response.data.length === 1) {
				const data = response.data[0];
				this.setLocation(data.woeid, data.title);
			} else {
				this.setState({
					locationList: response.data,
					page: 'list'
				});
			}
		})
		.catch(error => {
			console.log('error.response: ', error.response);
		});
	}

	chooseLocation(e) {
		e.preventDefault();
		this.setLocation(e.target.id, e.target.name);
	}

	setLocation(id, city) {
		const url = '/data/' + id;
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
		});
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
		let displayed = null;
		if (this.state.page === 'home' || this.state.page === 'list') {
			displayed = <Input page={this.state.page} 
												 getInput={this.getInput} 
												 searchLocations={this.searchLocations}
												 locationList={this.state.locationList}
												 chooseLocation={this.chooseLocation}/>;
		}
		if (this.state.page === 'results') {
			displayed = <Results city={this.state.city} 
													 weatherData={this.state.weatherData} 
													 newSearch={this.newSearch}
													 toggleSpeedUnit={this.toggleSpeedUnit}
													 toggleTempUnit={this.toggleTempUnit}
													 unitSpeed={this.state.unitSpeed}
													 unitTemp={this.state.unitTemp}/>;
		}
		return (
			<div className="page">
		  	{displayed}
		  </div>
		);
	}
}

export default App;