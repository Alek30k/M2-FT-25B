import React from 'react';
import { connect } from 'react-redux';
import { detallePeliculas } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount() {
    const id = this.props.match.params.id;
    this.props.detallePeliculas(id);
}

    render() {
        return (
            <div className="movie-detail">
                <h3>{`Titulo: ${this.props.detalles.Title}`}</h3> 
                <img src={this.props.detalles.Poster} alt='poster de la pelicula' />
                <h4>{`Year: ${this.props.detalles.Year}`}</h4>
                <h4>{`Actores: ${this.props.detalles.Actors}`}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
detalles: state.detalles
    }
}



export default connect( mapStateToProps, {detallePeliculas})(Movie);