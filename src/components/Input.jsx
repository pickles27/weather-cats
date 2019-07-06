import React from 'react';
import List from './List.jsx';

var Input = (props) => {
	var list = null;
	if (props.page === 'list') {
		list =  <List locationList={props.locationList} chooseLocation={props.chooseLocation}/>;
	}
	return (
		<div>
			<h3>Enter your city:</h3>
			<input onChange={props.getInput} />
			<button onClick={props.searchLocations}>search</button>
			{list}
		</div>
	);
}

export default Input;