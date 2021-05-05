import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe(' Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);    //se declara aquí para que alcance a todas las pruebas, esta 
    //inicializado a undefined
    //wrapper no sabe que tiene propiedades, eso hace que se pierda el intelisence, 
    //así que lo inicializamos aquí
    /*beforeEach() es un método que se va a ejecutar antes de cada una de las evaluaciones,se 
    va a ejecutar antes de  cada una de las evaluaciones, así que inicializamos el componente*/
    beforeEach(() => {//el wrapper se reinicia a cada prueba
        wrapper = shallow(<CounterApp />); //si lo declaramos aquí se queda en variable de scope
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100 ', () => {
        //usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
        //un string 100 no es igual a un integer 100
        const marcador = 100;
        const wrapper = shallow(<CounterApp value={marcador} />);
        const valorContador = wrapper.find('h2').text().trim();//trim borra los espacios en ambos lados

        expect(valorContador).toBe(`${marcador}`);//estamos comparando con un string

    })
    test('debe de incrementar contador con el botón +1 ', () => {

        //trabajar en base a la posición indice de los botones
        //se accede al primer boton,vamos a simular el evento "click",se hace con .simulate
        wrapper.find('button').at(0).simulate('click');
        //ahora comprobamos que el valor ha cambiado
        const valorBoton1 = wrapper.find('h2').text().trim();//trim borra los espacios en ambos lados

        expect(valorBoton1).toBe('11');//el 11 se queda en la siguiente, el 1 se queda sumado

    })
    test('debe de decrementar contador con el botón -1 ', () => {

        wrapper.find('button').at(2).simulate('click');
        const valorBoton2 = wrapper.find('h2').text().trim();//trim borra los espacios en ambos lados
        expect(valorBoton2).toBe('9');//el 1 se queda sumado, hay que reinicializar el componente
    })
    test('debe de colocar el valor por defecto con el boton reset ', () => {
        const marcador = 15;
        const wrapper = shallow(<CounterApp value={marcador} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();//trim borra los espacios en ambos lados
        /*necesito referencias a dos botones para comprobar si reset ha cambiado, estos dos botones son
        el boton reset y el boton sumar(también podría ser el de restar)*/
        expect(counterText).toBe(`${marcador}`);
    })


})
