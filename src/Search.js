import React, { useState } from "react";
import axios from "axios";
import MakeList from "./MakeList";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");
  let [forecast, setForecast] = useState("");
  let APIkey = "503764422e28613a3aa4cb8119955a59";

  function getWeather(response) {
      console.log(response);
    setText(<MakeList data={response.data} />);

    setForecast(<Forecast data={response.data}/>)
  }
  function handleQuery(event) {
    event.preventDefault();
    if(city){
      let url = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&units=metric&exclude=minutely,hourly&appid=${APIkey}`; 
      console.log(url);
      axios.get(url).then(getWeather);
    }
  }
  function updateQuery(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleQuery}>
        <input type="search" onChange={updateQuery} />
        <input type="submit" />
      </form>
      <div className='CurrentWeather'>{text}</div>
      <div className='ForecastTiles'>{forecast}</div>
    </div>
  );
}
