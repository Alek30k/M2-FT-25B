const apikey = '192d4db0';

export const obtenerPeliculas = (titulo) => {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ 
          type: 'OBTENER_PELICULAS', 
        payload: json.Search
      });
    });
      
  }
}      
  
export const quitarFav = (id) => ({ 
      type: 'QUITAR_FAV', 
      payload: id
    });
  
export const addFav = (pelicula) => ({ 
      type: 'AÑADIR_FAV', 
      payload: pelicula
    });
  
export const detallePeliculas = (imdbID) => { 
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${imdbID}`)
    
      .then(response => response.json())
      .then(json => {
        dispatch({ 
          type: 'DETALLE_PELICULA', 
          payload: imdbID
      });
      
    });
      
  }
     
};
  
 
  