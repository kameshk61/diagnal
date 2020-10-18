import {
    GET_MOVIES,
     MOVIES_ERROR,
  } from '../actions/types';

  const initialState = {
    movies: [],
    error: {},
    title:""
    
  };

function reducer(state=initialState,action) {

    const {type , payload} = action;
    
   switch(type){
            case GET_MOVIES:
                   
                return{
                    ...state,
                    movies: [...state.movies,...payload.movies],
                    title:payload.title,
                    
                };

           case MOVIES_ERROR:
            return{
                ...state,
                error:payload
            };

        default: 
            return state;
   }
}

export default reducer
