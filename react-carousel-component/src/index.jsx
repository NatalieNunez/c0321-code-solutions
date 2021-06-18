import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  'https://img.pokemondb.net/sprites/black-white/anim/shiny/zapdos.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif',
  'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif'
];

ReactDOM.render(<Carousel images={images} />, document.getElementById('root'));
