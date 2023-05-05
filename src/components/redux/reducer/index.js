import { combineReducers } from "redux";
import changeTodo from "./changeTodo";
import changeState from "./updateState";

const rootReducer =combineReducers({changeTodo,changeState});
export default rootReducer;