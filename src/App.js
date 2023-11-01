import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function AccuWeather() {
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const apiKey = '4b8db33390d062f386aa4cab86486d2e\n'; // Поменяйте на свой API ключ OpenWeatherMap

    const searchWeather = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => setWeatherData(response.data))
            .catch(error => console.error('Ошибка:', error));
    }

    return (
        <div className="App">
            <h1 className="title">Отслеживание погоды</h1>
            <input
                className="input"
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Введите город"
            />
            <button className="button"
                    onClick={searchWeather}>Найти</button>
            {weatherData && (
                <div id="weatherData">
                    <h2>Погода в {weatherData.name}, {weatherData.sys.country}</h2>
                    <h4>Температура: {weatherData.main.temp} °C</h4>
                    <h4>Ощущается как: {weatherData.main.feels_like} °C</h4>
                    <h4>Влажность: {weatherData.main.humidity} %</h4>
                </div>
            )}
        </div>
    );
}

export default AccuWeather;