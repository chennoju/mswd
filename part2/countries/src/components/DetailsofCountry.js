import React from 'react';
import Weather from './Weather';

// Component for displaying details of a country

const DetailsofCountry = ({country}) => {
    return (
        <>
            <h1>{country.name}</h1>
            <p>CAPTIAL: {country.capital}</p>
            <p>POPULATION: {country.population}</p>
            <h2>LANGUAGES</h2>
            <ul>
                {
                    country.languages.map(language => <li key={language.name}>{language.name}</li>)
                }
            </ul>
            <img src={country.flag} alt='Flag' style={{width: 150, height: 150}} />
            <Weather country={country} />
        </>
    );
};

export default DetailsofCountry;