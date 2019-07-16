import React from 'react';
import './styles/Results.css';

const Results = (props) => {
	const weatherData = props.weatherData;
	const imageURL = 'https://d5lv058fmgggj.cloudfront.net/' + weatherData.weather_state_abbr + '.jpg';

	function displayTemp(type) {
		let temp;
		if (type === 'max') {
			temp = weatherData.max_temp;
		} else {
			temp = weatherData.min_temp;
		}
		if (props.unitTemp === 'C') {
			return Math.round(temp * 10) / 10;
		} else {
			//(0°C × 9/5) + 32 = F
			return Math.round(((temp * 9 / 5) + 32) * 10) / 10;
		}
	}

	function displaySpeed() {
		if (props.unitSpeed === 'mph') {
			return Math.round(weatherData.wind_speed * 10) / 10;
		} else {
			return Math.round((weatherData.wind_speed * 1.6) * 10) / 10;
		}
	}

	return (
		<div className="resultsPage">
			<div className="resultsSpansDiv">
				<span className="imageSpan"><img src={imageURL}/></span>
				<span className="infoSpan">
					<h2>{props.city}</h2>
					<p className="weatherStatus">{weatherData.weather_state_name}</p>
					<p>Max: {displayTemp('max')}&deg;{props.unitTemp}</p>
					<p>Min: {displayTemp('min')}&deg;{props.unitTemp}</p>
					<p>Humidity: {weatherData.humidity}%</p>
					<p>Wind: {weatherData.wind_direction_compass} at {displaySpeed()} {props.unitSpeed}</p>
					<button className="unitToggle" onClick={props.toggleTempUnit}>&deg;{props.unitTemp}</button>
					<button className="unitToggle" onClick={props.toggleSpeedUnit}>{props.unitSpeed}</button>
					<button className="newSearchButton" onClick={props.newSearch}>new search</button>
				</span>
			</div>
		</div>
	);
}

export default Results;