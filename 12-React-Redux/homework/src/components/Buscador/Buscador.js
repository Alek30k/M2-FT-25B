import React, { Component } from "react";
import { connect } from "react-redux";
import { obtenerPeliculas, addFav } from "../../actions";
import { Link } from 'react-router-dom';
import './Buscador.css';

// import {addMovieFavorite, getMovies} from '../../actions';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //despacho la accion
    this.props.obtenerPeliculas(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         
         {this.props.peliculas && this.props.peliculas?.map((pelicula) => {
           return (
              <li key={pelicula.imdbID}>
                <Link to={`/movie/${pelicula.imdbID}`}>
                {pelicula.Title}
                </Link>
                <button onClick={()=>{this.props.addFav({Title: pelicula.title, imdbID: pelicula.imdbID})}} >Favoritos</button>
              </li>
           );
         })}
         
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    peliculas: state.peliculas
  };
}

export default connect(mapStateToProps, {obtenerPeliculas, addFav})(Buscador);
