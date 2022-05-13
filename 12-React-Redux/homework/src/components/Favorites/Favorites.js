import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { quitarFav } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favoritos && this.props.favoritos?.map( pelicula => {
            return (
              <li key={pelicula.imdbID}>
                <Link to={`/movie/${pelicula.imdbID}`}>{pelicula.Title}</Link>
                <button onClick={() => this.props.quitarFav(pelicula.imdbID)}>X</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    favoritos: state.favoritos
  }
}



export default connect(mapStateToProps, { quitarFav })(ConnectedList);
