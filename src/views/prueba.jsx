import React from 'react';

const prueba = () => {
  return (
    <>
      <button
        type='button'
        onClick={() => {
          setShow(!show);
        }}
      >
        Mostrar
      </button>

      {show ? (
        <div style={{color: 'red'}}>Div 1</div>
      ) : (
        <div style={{color: 'blue'}}>Div 2</div>
      )}
    </>
  );
};
export default prueba;
