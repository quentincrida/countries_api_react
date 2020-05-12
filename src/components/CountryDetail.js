import React from 'react';

const CountryDetail = (props) => {
  if(!props.country) return null;
  return (
    <div>
    <h3>Country: {props.country.name}</h3>
    <p>Capital City: {props.country.capital}</p>
    <p>Population: {props.country.population}</p>
    <h6>Area: {props.country.area} km/2</h6>
    </div>
  )

}

export default CountryDetail;
