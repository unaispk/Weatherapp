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
            <div className="relative flex items-center">
                <div id="slider" className='w-full h-full overflow-x-scroll overflow-y-hidden scrolling-touch scroll whitespace-nowrap scroll-smooth'>
                    {daysWeather.map((day, key) => (
                        <div className="w-[220px] day  inline-block m-4 p-8 cursor-pointer hover:scale-105 ease-in-out duration-300" key={key}>
                            <div className="thumb-content ">
                                <div className="flex justify-center"><h3>{daysOfWeek[key]}</h3></div>
                                <div className="flex justify-center">
                                    <img src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="" />
                                </div>
                                <div className="flex  flex-col text-center ">
                                    <p>{`${day.temp.min} - ${day.temp.max}`}</p>
                                    <h6>{day.weather[0].main}</h6>
                                    <p>{day.weather[0].description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CarouselSlide

