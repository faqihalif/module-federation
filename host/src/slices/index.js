import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

//Calendar
import CalendarReducer from "./calendar/reducer";

const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Calendar: CalendarReducer,
});

export default rootReducer;