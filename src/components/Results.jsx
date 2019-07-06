import React from 'react';
import './styles/Results.css';

var Results = (props) => {
	var weatherData = props.weatherData;
	var imageURL = 'https://weathercatsmedia.s3.amazonaws.com/' + weatherData.weather_state_abbr + '.jpg';
	return (
		<div className="resultsPage">
			<div className="navbar">
				<button className="newSearchButton" onClick={props.newSearch}>new search</button>
			</div>
			<div className="resultsSpansDiv">
				<span className="imageSpan"><img src={imageURL}/></span>
				<span className="infoSpan">
					<h3>{props.city}</h3>
					<h4>{weatherData.weather_state_name}</h4>
					<p>Max: {Math.round(weatherData.max_temp * 10) / 10}&deg;C</p>
					<p>Min: {Math.round(weatherData.min_temp * 10) / 10}&deg;C</p>
					<p>Humidity: {weatherData.humidity}%</p>
					<p>Wind: {weatherData.wind_direction_compass} at {Math.round(weatherData.wind_speed * 10) / 10} mph</p>
				</span>
			</div>
		</div>
	);
}

export default Results;