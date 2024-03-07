import React from 'react'
import './City.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const City = ({ weatherData }) => {
    console.log("weatherData <--City Component-->", weatherData);

    // const timeZone = new Date(weatherData?.city.timezone * 1000).toLocaleTimeString().slice(0,4);
    // console.log("timeZone", timeZone);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date()
    const currentDate = `${daysOfWeek[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
    console.log(currentDate);
    
    return (
        <div className='city' >
           
                <div className="cityContents">
                    <h1>{weatherData.city.name}, {weatherData.city.country}</h1>
                    <p>{currentDate}</p>
                    <p>Population : {weatherData.city.population}</p>
                </div>
           
        </div >
    )
}

export default City
