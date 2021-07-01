
const baseURL = "http://api.weatherapi.com/v1/";

export const currentURL = (location) => `${baseURL}forecast.json?key=${process.env.REACT_APP_KEY_API}&q=${location}&days=7`;
