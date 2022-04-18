import React from 'react';

export default function Forecast(response){
    console.log(response.data);


    // Return information of the function.
    return(<div className='Forecast'>
        <h3>This will be a list of forecasts for X days in SOME</h3>
    </div>)
}