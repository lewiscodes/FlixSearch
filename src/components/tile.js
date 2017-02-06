import React from 'react';

export default (props) => {
  return (
    <div className="tile">
      <div className="header">
        <h2 className="title">{props.title}</h2>
        <h3 className="year">{props.year}</h3>
      </div>
      <img className="poster" src={props.poster} />
      <p className="synopsis">{props.synopsis}</p>
    </div>
  )
}
