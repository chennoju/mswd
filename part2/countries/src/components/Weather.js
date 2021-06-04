import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Component for displaying weather information of a country

const Weather = ({country}) => {
    const [data, setData] = useState(null);

    // Fetch weather information from API
    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital
        };

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => setData(response.data.current));
    }, [country]);

    return (
        <div>
        <h2>WEATHER IN {country.capital}</h2>
            {
                data ?
                <>
                    <p><strong>TEMPERATURE:</strong> {data.temperature} CELCIUS</p>
                    <img src={data.weather_icons[0]} alt='Weather icon' />
                    <p><strong>WIND:</strong> {data.wind_speed} mph, DIRECTION {data.wind_dir}</p>
                </>
                :
                <p>LOADING WEATHER DATA...</p>
            }
        </div>
    );
};

export default Weather;