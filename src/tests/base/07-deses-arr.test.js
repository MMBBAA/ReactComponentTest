import '@testing-library/jest-dom';
import { retornaArreglo } from '../../07-deses-arr.js';

describe('Pruebas en 07-deses-arr.test.js', () => {

    test('debe de retornar un string y un número ', () => {


        //1º-inicialización
        const arr = retornaArreglo();
        const[letras, numeros]=retornaArreglo();
        
        //2º-estímulo
        //const esperado = ['ABC', 123];


        //3º-observar el comportamiento
       // expect(arr).toEqual(esperado);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })


})

