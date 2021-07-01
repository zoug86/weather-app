const initialState = {
    currentData: {},
    currentLocation: {},
    forecast: {},
    isLoading: true
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAILS":
            return {
                ...state,
                currentData: action.payload.weatherParam.current,
                currentLocation: action.payload.weatherParam.location,
                forecast: action.payload.weatherParam.forecast,
                isLoading: false
            };
        case "LOADING_DETAILS":
            return { ...state, isLoading: false }
        default:
            return { ...state };

    }
}

export default detailReducer;