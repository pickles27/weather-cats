import React from 'react';

var Input = (props) => (
	<div>
		<h3>enter your location:</h3>
		<input onChange={props.getInput} />
		<button onClick={props.searchLocations}>search</button>
	</div>
)

export default Input;