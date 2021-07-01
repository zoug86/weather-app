import axios from 'axios';
import { currentURL } from '../api';

export const loadDetails = (location) => async (dispatch) => {
    const response = await axios.get(currentURL(location));
    //console.log(currentURL(location))
    dispatch({
        type: "GET_DETAILS",
        payload: {
            weatherParam: response.data
        }
    })

    dispatch({
        type: "LOADING_DETAILS",
    });
}