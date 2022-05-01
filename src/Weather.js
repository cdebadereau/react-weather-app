import React from "react";
import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    city: "Madrid",
    date: "Saturday, April 9",
    hour: "15:50",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: 16,
    humidity: 60,
    speedWind: 20,
    feelsLike: 16,
    temperatureMax: 20,
    temperatureMin: 15,
  };
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <form className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-dark w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <div className="row">
            <div className="col-6">
              <ul>
                <li>{WeatherData.date}</li>
                <li>{WeatherData.hour}</li>
                <li className="description">{WeatherData.description}</li>
              </ul>
            </div>
            <div className="col-6">
              <h1>{WeatherData.city}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix current-temperature">
              <img
                src={WeatherData.imgUrl}
                alt={WeatherData.description}
                width="50px"
                className="float-left"
              />
              <div className="float-left temperature-description">
                <strong>{WeatherData.temperature}</strong>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6 temperature-info">
            <div className="row">
              <div className="col-6 info-elements">
                <strong>Humidity:</strong>
              </div>
              <div className="col-6">
                <span>{WeatherData.humidity}</span>%
              </div>
            </div>
            <div className="row">
              <div className="col-6 info-elements">
                <strong>Wind:</strong>
              </div>
              <div className="col-6">
                <span></span>
                {WeatherData.speedWind} km/h
              </div>
            </div>
            <div className="row">
              <div className="col-6 info-elements">
                <strong>Feels like:</strong>
              </div>
              <div className="col-3">
                <span>{WeatherData.feelsLike}</span>°C
              </div>
            </div>
            <div className="row">
              <div className="col-6 info-elements">
                <strong>
                  {" "}
                  <span>{WeatherData.temperatureMax}</span>°
                </strong>{" "}
                |<span>{WeatherData.temperatureMin}</span>°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
