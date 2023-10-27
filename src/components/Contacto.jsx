import React from 'react';
import Button from 'react-bootstrap/Button';

function Contacto() {
  return (
    <div className='container-contacto'>
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <p>Correo:</p>
      <input type="email" placeholder="name@example.com" className='input1' />
      <p>Descripción</p>
      <textarea></textarea>
      <Button variant="danger">Enviar</Button>{' '}
    </div>
  );
}

export default Contacto;
