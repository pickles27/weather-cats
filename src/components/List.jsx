import React from 'react';
import './styles/List.css';

var List = (props) => {
	var locationList = props.locationList;
	var displayed = locationList.map(location => (
			<div key={location.woeid}>
				<button className="locationButton" id={location.woeid} name={location.title} onClick={props.chooseLocation}>{location.title}</button>
			</div>
		));
	if (displayed.length === 0) {
		displayed = <p>no results unfortunately, please try a different search</p>;
	}
	return (
		<div className="listDiv">
			<h4>Select your city:</h4>
			{displayed}
		</div>
	);
}

export default List;