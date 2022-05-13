const initialState = {
    favoritos: [],
    detalles: {},
    peliculas: []
  };

  const rootReducer = (state = initialState, action) => {
  switch (action.type) {
     case "OBTENER_PELICULAS":
        return {
          ...state,
           peliculas: action.payload
          };

     case "AÑADIR_FAV":
            return {
              ...state,
              favoritos: [...state.favoritos, action.payload]
            }

     case "QUITAR_FAV":
          return {
            ...state,
            favoritos: state.favoritos.filter(peliculas => peliculas.imdbID !== action.payload)
          }
    

     case "DETALLE_PELICULA":
            return {
              ...state,
              detalles: action.payload
            }
       default:
         return state;
  };

}

export default rootReducer;