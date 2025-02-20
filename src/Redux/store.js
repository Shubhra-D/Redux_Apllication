import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import {workoutReducer} from './reducers/WorkoutReducer'
import { composeWithDevTools } from "@redux-devtools/extension";
//if I have more than one reducer then I can keep like this
const rootReducer = combineReducers({
    fitness: workoutReducer,
});

export const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);