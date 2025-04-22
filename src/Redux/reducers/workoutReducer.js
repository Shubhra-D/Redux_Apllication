import { FETCH_CATEGORIES, FETCH_WORKOUTS } from "../actions/actions";

const initState = {workouts:[] ,categories:[]};
export const workoutReducer = (state=initState,action)=>{
  let updatedState;   
    switch (action.type){
        case FETCH_WORKOUTS :
            updatedState = {...state,workouts:[...state.workouts,action.payload]}
         return updatedState;
        case FETCH_CATEGORIES:
            updatedState = { ...state,categories:[...state.categories,action.payload]}
         return updatedState;
            default :
         return state;
    }
}