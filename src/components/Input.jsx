import React from 'react';
import List from './List.jsx';
import './styles/Input.css';

const Input = (props) => {
	let list = null;
	if (props.page === 'list') {
		list =  <List locationList={props.locationList} chooseLocation={props.chooseLocation}/>;
	}
	return (
		<div className="inputDiv">
			<h1>weather cats</h1>
			<form onSubmit={props.searchLocations}>
			<input placeholder="Enter a city" onChange={props.getInput} />
			<input type="submit" className="searchButton" value="search"/>
			</form>
			{list}
		</div>
	);
}

export default Input;