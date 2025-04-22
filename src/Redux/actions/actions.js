import axios from "axios";

// Action Types
export const FETCH_WORKOUTS = "FETCH_WORKOUTS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const DELETE_WORKOUT = "DELETE_WORKOUT";


// Fetch workouts (optionally by category)
export const fetchWorkouts = (category = "") => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3000/workouts`, {
      params: category ? { category } : {}, 
    });

    dispatch({ type: FETCH_WORKOUTS, payload: response.data });
  } catch (err) {
    console.error("Error fetching workouts:", err);
  }
};

// Fetch all workout categories
export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/categories");
    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
  } catch (err) {
    console.error("Error fetching categories:", err);
  }
};



export const deleteWorkout = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/workouts/${id}`);
    dispatch({ type: DELETE_WORKOUT, payload: id });
  } catch (err) {
    console.error("Error deleting workout:", err);
  }
};



