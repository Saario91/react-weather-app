import React, { useState } from 'react';
//import axios from 'axios';

export default function Search(){
    let [city, setCity] = useState("");
    let [text,setText]  = useState("");

    function handleQuery(event){
        event.preventDefault();
        if(city){
        console.log(city);
        setText(`Your city is ${city}`);
    }
    }

    function updateQuery(event){
        setCity(event.target.value);
        console.log(`The city is ${city}`);

    }

    return(<div className='Search'>
        <form onSubmit={handleQuery}>
            <input type='search' onClick={updateQuery} placeholder='Enter your city...'/>
            <input type='submit'/>
        </form>
        <h2>{text}</h2>
        </div>)
}