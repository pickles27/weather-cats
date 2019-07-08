import React from 'react';
import './styles/Results.css';

var Results = (props) => {
	var weatherData = props.weatherData;
	var imageURL = 'https://d5lv058fmgggj.cloudfront.net/' + weatherData.weather_state_abbr + '.jpg';
	return (
		<div className="resultsPage">
			<div className="resultsSpansDiv">
				<span className="imageSpan"><img src={imageURL}/></span>
				<span className="infoSpan">
					<h2>{props.city}</h2>
					<p className="weatherStatus">{weatherData.weather_state_name}</p>
					<p>Max: {Math.round(weatherData.max_temp * 10) / 10}&deg;C</p>
					<p>Min: {Math.round(weatherData.min_temp * 10) / 10}&deg;C</p>
					<p>Humidity: {weatherData.humidity}%</p>
					<p>Wind: {weatherData.wind_direction_compass} at {Math.round(weatherData.wind_speed * 10) / 10} mph</p>
					<button className="newSearchButton" onClick={props.newSearch}>new search</button>
				</span>
			</div>
		</div>
	);
}

export default Results;