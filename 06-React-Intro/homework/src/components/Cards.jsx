import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  if(!props.cities) { 
    return <h1>No hay ciudades disponibles</h1>;
  }
  return (
  <div>
    {
    cities && cities.map(c =>
      <Card
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
          key={c.id}
      />)}
  </div>)
};