import React from 'react'
import './CityWeather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind , faTemperatureThreeQuarters,faSun } from '@fortawesome/free-solid-svg-icons';

function CityWeather({ weatherData }) {

    console.log('weatherData ==> ', weatherData);


    const weatherDetailsList = weatherData.list
    console.log(weatherDetailsList);
    const date = new Date();
    const currentDate = date.getDay();

    const currentDayWeatherDetails = weatherDetailsList[currentDate]
    console.log(currentDayWeatherDetails);

    const sunRise = weatherData ? currentDayWeatherDetails.sunrise : null
    console.log('sunRise', sunRise);

    // Function for converttime to local time
    const SunRiseOrSet = (timestamp) => {
        const milliseconds = timestamp * 1000
        const DateObject = new Date(milliseconds)
        const RiseOrSet = `${DateObject.toLocaleTimeString().slice(0, 4)}`
        return RiseOrSet
    }
    console.log(SunRiseOrSet(sunRise));

    const sunSet = weatherData ? currentDayWeatherDetails.sunset : null
    console.log('sunSet', sunSet);
    
    const currentDayWeatherMain = currentDayWeatherDetails.weather[0].main
    const currentDayWeatherDescription = currentDayWeatherDetails.weather[0].description
    console.log(currentDayWeatherMain);
    
    console.log(currentDayWeatherDetails);

    const weatherIcon = currentDayWeatherDetails.weather[0].icon
    console.log(currentDayWeatherDetails.pressure)
    const pressure = currentDayWeatherDetails.pressure
    const humidity = currentDayWeatherDetails.humidity
    const gust = currentDayWeatherDetails.gust

    return (
        <div className='cityweather'>
            <div className="  IconRiseSet d-flex justify-content-between">
                <div className=" icon">
                <img src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt="" />
                </div>
                <div className=" RiseSet ">
                    
                    <p><span><FontAwesomeIcon icon={faSun} style={{ color: 'yellow', transform: 'rotate(-45deg)' }} /></span> {SunRiseOrSet(sunRise)} A.M</p>
                    <p><span><FontAwesomeIcon icon={faSun} style={{ color: 'orange', transform: 'rotate(45deg)' }} /></span>{`${SunRiseOrSet(sunSet)} P.M`}</p>
                </div>
            </div>
            <h1>29.76'C</h1>
         
            <p>{`${currentDayWeatherMain}, ${currentDayWeatherDescription}`}</p>
            {/* <p><FontAwesomeIcon icon={faTint} style={{ color: 'blue' }} size="2x" /></p> */}

            {/* <p>{` ${pressure} hPa &nbsp; ${humidity} % ${gust} m/s N`}</p> */}
            <p> <span ><FontAwesomeIcon icon={faTemperatureThreeQuarters} style={{  color: '#000'}}/></span> {pressure} hPa  
                <span style={{ marginLeft: '8px', color: '#000'}}><FontAwesomeIcon icon={faTint}  /></span> {humidity} % 
                <span  style={{ marginLeft: '8px', color: '#000'}}><FontAwesomeIcon icon={faWind}  /></span> {gust} m/s N
            </p>
            

        </div>
    )
}

export default CityWeather
