import React from 'react';
import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';


describe(' Pruebas en <PrimeraApp/> ', () => {
    /*test('debe de mostrar el mensaje "Hola, Soy Juan "', () => {
        const saludo = "Hola, Soy Juan";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);
        expect ( getByText( saludo ) ).toBeInTheDocument();
    })*/
    //prueba con Enzyme
    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        //shallow lo importamos de Enzyme
        const saludo='Hola, Soy Juan';
        const wrapper=shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar el subtítulo enviado por props', () => {

        const saludo='Hola, Soy Juan';
        const subTitulo='Soy un subtitulo';
        const wrapper=shallow(
        <PrimeraApp saludo={saludo} 
        subtitulo={subTitulo}
        />
        );
            const textoParrafo=wrapper.find('p').text();
        //    console.log(textoParrafo);
    
        expect(textoParrafo).toBe(subTitulo);
    })
    
});