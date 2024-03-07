import React from 'react'
import './City.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const City = ({ weatherData }) => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const date = new Date()
    const currentDate = `${daysOfWeek[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
    
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
