import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';




const divRoot=document.querySelector('#app');
const divRoot2=document.querySelector('#app2');

//renderización

//ReactDOM.render(<PrimeraApp />,divRoot);
ReactDOM.render(<PrimeraApp/>,divRoot2);
ReactDOM.render(<CounterApp value={0}/>,divRoot);
//console.log(divRoot);