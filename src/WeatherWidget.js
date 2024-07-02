// WeatherWidget.js

import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const apiKey = '76ee260ff8453e8849f226fc2d345c3a';
    const city = 'Barrie';

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                if (!response.ok) {
                    throw new Error('Weather data not available');
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, [apiKey, city]);

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div className="weather-widget">
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].main}</p>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    );
};

export default WeatherWidget;
