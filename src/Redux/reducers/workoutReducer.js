import { FETCH_CATEGORIES, FETCH_WORKOUTS,DELETE_WORKOUT } from "../actions/actions";



const initState = {workouts:[] ,categories:[]};
export const workoutReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_WORKOUTS:
      return { ...state, workouts: action.payload }; 
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    case DELETE_WORKOUT:
        return {
          ...state,
          workouts: state.workouts.filter((w) => w.id !== action.payload),
    };
    default:
      return state;
  }
};
