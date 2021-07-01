import React, { useEffect, useState } from 'react';
import { dayFormat, dateFormat } from '../dayFormat';
import WeekForcast from './WeekForcast';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadDetails } from '../actions/detailAction';


const Display = () => {
    const dispatch = useDispatch();
    // call useEffect Once at the first render
    useEffect(() => {
        dispatch(loadDetails("london"));

    }, [])

    const [location, setLocation] = useState("");
    const { currentLocation, currentData, isLoading } = useSelector(state => state.details)
    const changeHandler = (e) => {
        setLocation(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(loadDetails(location));
        console.log(currentData.is_day)
        setLocation("");
        if (currentData.is_day === 0) {
            document.body.style.background = "black";
        }
    }

    const dayMode = async () => {
        if (currentData.is_day === 0) {
            document.body.style.background = "linear-gradient(to top, #283E51, #0A2342)";
        } else {
            document.body.style.background = "linear-gradient(#acb6e5, #86fde8)";
        }
    }
    dayMode();
    console.log(dayFormat(currentData.last_updated))
    if (!isLoading) {
        return (

            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{dayFormat(currentData.last_updated)}</h2><span className="date-day">{dateFormat(currentData.last_updated)}</span>
                        <i className="location-icon" data-feather="map-pin"></i><span className="location">{`${currentLocation.name}, ${currentLocation.country}`}</span>

                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <img src={currentData.condition.icon} style={{ width: "150px", height: "150px", marginTop: "10px" }} alt="" />
                        <h1 className="weather-temp">{`${Math.floor(currentData.temp_c)}°C`}</h1>
                        <h3 className="weather-desc">{currentData.condition.text}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">{`${currentData.precip_mm} mm`}</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{`${currentData.humidity} %`}</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">{`${currentData.wind_kph} km/h`}</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <WeekForcast />
                    <div className="location-container">
                        <form>
                            <input className="location-input" value={location} type="text" placeholder="Enter City" onChange={changeHandler} />
                            <button className="location-button" onClick={clickHandler}> <i data-feather="map-pin"></i><span>Change location</span></button>
                        </form>

                    </div>
                </div>
            </div>

        )
    } else {
        return <h1>Loading</h1>
    }


}

export default Display;