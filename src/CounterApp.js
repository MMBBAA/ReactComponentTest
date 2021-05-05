import React,{useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value=0 }) => {

    const [counter,setCounter]= useState(0);
    //console.log(counter);
    //handleAdd
    const handleAdd=()=>{
        setCounter(counter+1);
        //setCounter((counter)=>counter+1);//otra forma de hacer que el contador funcione
        }
    const Subtract=()=>{
        setCounter(counter-1);
    }
    const handleReset=()=>{
        setCounter(value);
    }
    
    return (
        <>
            <h1>Aplicación Suma</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={Subtract}>-1</button>
            
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,

}

export default CounterApp;