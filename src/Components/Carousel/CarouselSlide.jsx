import React, { useEffect, useState } from 'react'
import './CarouselSlide.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import axios from 'axios';

const CarouselSlide = ({ weatherData }) => {

    console.log(weatherData);

    const daysWeather = weatherData.list
    console.log(daysWeather);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    return (
        <>
            <div className="container daysContainer">
                {weatherData && (
                    <div className="row dailyForcast">

                        {daysWeather.map((day, key) => (
                            <div className="col day" key={key}>
                                <div className="thumb-wrapper">
                                    <div className="thumb-content">
                                        <h4>{daysOfWeek[key]}</h4>
                                        <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="" />
                                        <p>{`${day.temp.min} - ${day.temp.max}`}</p>
                                        <h6>{day.weather[0].main}</h6>
                                        <p>{day.weather[0].description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {/* Carousel controls */}

                    </div>
                )}
            </div>
        </>
    )
}

export default CarouselSlide

