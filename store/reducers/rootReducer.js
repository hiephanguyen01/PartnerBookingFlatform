import { combineReducers } from "redux";
import userReducer from "./userReducer";
import socketReducer from "./socketReducer";
import studioPostReducer from "./studioPostReducer";

const rootReducer = combineReducers({
  userReducer,
  socketReducer,
  studioPostReducer,
});
export default rootReducer;
