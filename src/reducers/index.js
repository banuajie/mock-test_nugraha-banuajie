import { combineReducers } from "redux";
import SignInReducer from "./signIn";
import UserReducer from "./user";
import EmployeeReducer from "./employee";

export default combineReducers({
    SignInReducer,
    UserReducer,
    EmployeeReducer,
});
