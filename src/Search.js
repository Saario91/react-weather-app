import React, { useState } from "react";
import axios from "axios";
import MakeList from "./MakeList";
import Forecast from "./Forecast";

export default function Search() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");
  let APIkey = "503764422e28613a3aa4cb8119955a59";

  function getWeather(response) {
    console.log(response.data);
    setText(<MakeList data={response.data} />);
  }
  function handleQuery(event) {
    event.preventDefault();
    console.log(`The city is ${city}`)
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
      axios.get(url).then(getWeather);
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
      <div className='ForecastTiles'><Forecast city={city} days={3} /></div>
    </div>
  );
}
