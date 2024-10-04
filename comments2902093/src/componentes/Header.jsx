import React from 'react';

const Header = ({ autor, titulo, ficha, CentroFormacion }) => {
  const headerStyles = {
    backgroundColor: 'black',
    color: '#fff',
  };

  const tituloStyle = {
    color: '#f39c12', 
    backgroundColor: 'black'
  };

  const autorStyle = {
    color: '#55abc1', 
    backgroundColor: 'black'
  };

  const fichaStyle = {
    color: '#e74c3c', 
    backgroundColor: 'black'
  };

  const centroStyle = {
    color: '#58e302',
    backgroundColor: 'black'
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1 style={tituloStyle}>{titulo}</h1>
        <p style={autorStyle}>Autor: {autor}</p>
        <p style={fichaStyle}>Ficha: {ficha}</p>
        <p style={centroStyle}>Centro: {CentroFormacion}</p>
      </div>
    </header>
  );
};

export default Header;
