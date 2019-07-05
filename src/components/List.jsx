import React from 'react';

var List = (props) => {
	var locationList = props.locationList;
	var displayed = locationList.map(location => (
			<div key={location.woeid}>
				<button id={location.woeid} onClick={props.chooseLocation}>{location.title}</button>
			</div>
		));
	if (displayed.length === 0) {
		displayed = <p>no results unfortunately, please try a different search</p>;
	}
	return (
		<div>
			{displayed}
		</div>
	);
}

export default List;