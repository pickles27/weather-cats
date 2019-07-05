import React from 'react';
import axios from 'axios';
import Input from './Input.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			locationList: []
		};
		this.getInput = this.getInput.bind(this);
		this.searchLocations = this.searchLocations.bind(this);
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
				locationList: response.data
			});
		})
		.catch(error => {
			console.log('error: ', error.response);
		});
	}

	render() {
		return (<div>
			<Input getInput={this.getInput} searchLocations={this.searchLocations}/>
		</div>);
	}
}

export default App;