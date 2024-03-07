import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import City from "./Components/City/City"
import CityWeather from "./Components/CityWeather/CityWeather"
import Search from './Components/Search/Search';
import CarouselSlide from './Components/Carousel/CarouselSlide';

import './App.css'
import PageLoader from './Components/PageLoader/PageLoader';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (city) { fetchWeatherData() }
  }, [city])

  const fetchWeatherData = () => {
    setLoading(true)
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`;
    axios.get(apiEndpoint)
      .then(response => {setError(false), setLoading(false) ,setWeatherData(response.data)})
      .catch(error => {setError(true) ,setLoading(false) ,setWeatherData(''), console.error('Error fetching weather data:', error)});
  };

  return (
    <>
    <div className="main">
    <div className=''>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <Search onSearch={(location) => setCity(location)} />
          </div>
        </div> 

        { loading ? < PageLoader/> : error ? <> <h1 className='ErrorMessage'>Please enter a valid input  </h1> </>  : ''}
      

        {weatherData &&  (
          <>
            <div className="cityAndWeatherContainer">
            <div className=" row cityCityWeather ">
              <div className=" col">
                <City weatherData={weatherData} />
              </div>
              <div className=" col">
                <CityWeather weatherData={weatherData} />
              </div>
            </div>
            </div>
            <div className="carousel">
              <CarouselSlide weatherData={weatherData} />

            </div>

          </>
        ) }

      </div>
    </div>
      

    </>
  )
}

export default App
