import React from 'react';
import cakeImage from '../assets/pastel.png'

function Home() {
  return (
    <div className='home-style'>
      <h1>Bienvenido a <strong>Happy Cake</strong></h1>
      <p><small>El lugar de los pasteles felices</small></p>
      <img src={cakeImage} alt="Pastel" width="300" height="200" />
    </div>
  );
}

export default Home;
