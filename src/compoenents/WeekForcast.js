import React from 'react';
import { forecastDayFormat } from '../dayFormat';

//Redux
import { useSelector } from 'react-redux';


const WeekForcast = () => {
    const { forecast } = useSelector(state => state.details);
    const forecastDay = forecast.forecastday;
    //console.log(dayFormat(forecastDay[0].date))
    return (
        <div className="week-container">
            <ul className="week-list">
                {forecastDay.map((day, i) => {
                    return (
                        <li key={i}>
                            <img src={day.day.condition.icon} style={{ width: "50px", height: "50px" }} alt="" />
                            <i className="day-icon" data-feather="cloud"></i>
                            <span className="day-name">{forecastDayFormat(day.date)}</span><span className="day-temp">{Math.floor(day.day.maxtemp_c)}</span>
                        </li>
                    )
                })}

                <div className="clear"></div>
            </ul>
        </div>
    )
}

export default WeekForcast;