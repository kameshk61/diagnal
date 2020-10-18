import { GET_MOVIES , MOVIES_ERROR} from './types';

// Get Movies
export const getMovies = (pageNum) => async dispatch => {
    try {

    fetch(`${process.env.PUBLIC_URL}/CONTENTLISTINGPAGE-PAGE${pageNum}.json`)
      .then((response) => response.json())
      .then((json) =>  {
          
          return dispatch({
            type: GET_MOVIES,
            payload: {movies:json.page['content-items'].content, title:json.page.title }
          })
      } 
      );

    } catch (err) {
      dispatch({
        type: MOVIES_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }





 