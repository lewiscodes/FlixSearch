import React from 'react';

export default (props) => {
  return (
    <div className={"checkbox" + ' ' + props.mainClass} key={props.key}>
      <input
        type="checkbox"
        name={props.mainClass}
        id={props.name}
        value={props.id}
        onChange={(event) => props.changeEvent(event, props.id)}
      />
      <label className="fakeCheckbox" htmlFor={props.name}>
        <label className="fakeCheckboxSelect" htmlFor={props.name}></label>
      </label>
      <label className="label" htmlFor={props.name}>{props.name}</label>
    </div>
  )
}
