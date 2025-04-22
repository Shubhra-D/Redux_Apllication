import axios from "axios";

//action creators
export const FETCH_WORKOUTS = "FETCH_WORKOUTS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";


 export const fetchWorkouts = (category="")=>async(dispatch)=>{
   try{
     const response = await axios.get("http://localhost:3000/workouts")
     dispatch({type:FETCH_WORKOUTS,payload:response.data})
   }catch(err){
      console.log(err)
   }
}
export const fetchCategories = ()=>async(dispatch)=>{
    const response = await axios.get('http://localhost:3000/categories')
     dispatch({type:FETCH_CATEGORIES,payload:response.data})
}


