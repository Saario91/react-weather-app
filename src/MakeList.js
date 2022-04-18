import React from "react";

export default function MakeList(response) {
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let wind = response.data.wind.speed;
  let iconSrc = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

  return (
    <ul>
      <li>Temperature is {temperature}°C</li>
      <li>Description: {description}</li>
      <li>Humidity: {humidity}%</li>
      <li>Wind: {wind}km/h</li>
      <li>
        <img src={iconSrc} alt="Icon showing current weather" />
      </li>
    </ul>
  );
}
