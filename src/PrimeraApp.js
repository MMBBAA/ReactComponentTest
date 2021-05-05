import React/*,{ Children }*/ from 'react';
import PropTypes from 'prop-types';

//import React, { Fragment } from 'react';
//FC
const PrimeraApp = ({ saludo, subtitulo }) => {



    return (
        <>
            <h1>{saludo}</h1>
            {/*  <pre>{JSON.stringify(saludo,null,3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
   // otraPropiedad: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    saludo:'Recurso:',
    subtitulo: 'calculadora de suma',
}

export default PrimeraApp;