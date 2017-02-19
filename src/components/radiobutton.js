import React from 'react';

export default (props) => {
  return (
    <div className={"radiobutton" + ' ' + props.mainClass} key={props.key}>
      <input
        type="radio"
        name={props.mainClass}
        id={props.name}
        onChange={(event) => {props.changeEvent(event, props.name)}}
      />
    <label htmlFor={props.name} className="fakeRadioButton">
        <label htmlFor={props.name} className="fakeRadioButtonSelect"></label>
      </label>
      <label className="label" htmlFor={props.name}>{props.name}</label>
    </div>
  )
}
