import React from 'react';

export default (props) => {
  return (
    <div className="genre" key={props.key}>
      <input
        type="checkbox"
        name="genre"
        id={props.name}
        value={props.id}
        onChange={(event) => props.changeEvent(event, props.id)}
      />
      <label className="checkbox" htmlFor={props.name}>
        <label className="checkboxSelect" htmlFor={props.name}></label>
        <label className="label" htmlFor={props.name}>{props.name}</label>
      </label>
    </div>
  )
}
