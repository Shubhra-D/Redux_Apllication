//action creators
const FETCH_WORKOUTS = "FETCH_WORKOUTS";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";


 export const fetchWorkouts = (category="")=>async(dispatch)=>{
    const response = await axios.get('http://localhost:3000/workouts? ')
     dispatch({type:FETCH_WORKOUTS,payload:response.data})
}
export const fetchCategories = ()=>async(dispatch)=>{
    const response = await axios.get('http://localhost:3000/categories')
     dispatch({type:FETCH_CATEGORIES,payload:response.data})
}


