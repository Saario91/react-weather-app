import axios from 'axios';
import React from 'react';

export default function Forecast(props){
    // Declaring variables from the input props
    let city     = props.city;
    let dayCount = props.days;

    // Function that handles the API call and processes the data
    function getForecast(response){
        console.log(response);
    }

    // API url and API call
    let APIkey = "503764422e28613a3aa4cb8119955a59";
    let url = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${dayCount}&appid=${APIkey}`;
    //axios.get(url).then(getForecast);


    // Return information of the function.
    return(<div className='Forecast'>
        <h3>This will be a list of forecasts for {dayCount} days in {city}</h3>
    </div>)
}