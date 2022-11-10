import React from 'react';

export default function Button(props) {
    return (
      <button className={props.class} onClick={props.action}>
        <strong>{props.text}</strong>
      </button>
    );
}

Button.defaultProps = {
    class: 'button',
    text: 'Do something'
}