import React from 'react';
import Button from './Button';

export default function Card(props) {
    return (
      <figure className="card flex-center flex-column">
        <img className="card-img" src={props.url} alt={props.name} />
        <figcaption className="card-text">{props.name}</figcaption>
        <div className="card-button flex-center">
          <Button className={props.buttonClass} action={props.buttonAction}>
            {props.buttonText}
          </Button>
        </div>
      </figure>
    );
}