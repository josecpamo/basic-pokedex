import React from 'react';

export default function Header(props) {
  return (
    <header className="header flex-center">
      <article className="logo flex-center">
        <img className="logo-img" src={props.url} alt={props.name} />
        <span className="logo-txt">{props.title}</span>
      </article>
    </header>
  );
}

Header.defaultProps = {
  url: "pokeball.svg",
  name: "Pokeball",
  title: "Pokedex",
};