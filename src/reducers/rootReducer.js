import { combineReducers } from "redux-immutable";
import tickets from "./ticketReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  tickets,
  authToken: authReducer
});

export default rootReducer;
