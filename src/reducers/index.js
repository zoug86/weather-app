import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
    // reducers go here
    details: detailsReducer
})

export default rootReducer;