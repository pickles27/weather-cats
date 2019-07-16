import React from 'react';
import './styles/List.css';

const List = (props) => {
	const locationList = props.locationList;
	const displayed = locationList.sort((a, b) => {
		let index = 0;
		if (a.title[index] > b.title[index]) {
			return 1;
		}
		if (a.title[index] < b.title[index]) {
			return -1;
		}
		while (index < a.title.length && index < b.title.length) {
			if (a.title[index] > b.title[index]) {
				return 1;
			}
			if (a.title[index] < b.title[index]) {
				return -1;
			}
			index++;
		}
		return 0;
	}).map(location => (
			<div key={location.woeid}>
				<button className="locationButton" id={location.woeid} name={location.title} onClick={props.chooseLocation}>{location.title}</button>
			</div>
		));
	if (displayed.length === 0) {
		displayed = <p className="invalidSearchMessage">no results unfortunately, please try a different search</p>;
	}
	return (
		<div className="listDiv">
			<h4 className="selectCityMessage">Select your city:</h4>
			{displayed}
		</div>
	);
}

export default List;