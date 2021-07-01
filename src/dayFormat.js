export const dayFormat = (date) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    return days[d.getDay()];
}

export const dateFormat = (date) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let d = new Date(date);
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = d.getMonth();
    month = months[month]
    let year = d.getFullYear();
    return `${day} ${month} ${year}`
}

export const forecastDayFormat = (date) => {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let d = new Date(date);
    return days[d.getDay() + 1];
}
//console.log(dateFormat("2021-06-30 17:30"))