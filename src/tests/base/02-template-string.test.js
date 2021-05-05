import '@testing-library/jest-dom';

import { getSaludo } from '../../02-template-string';

describe('pruebas en el archivo 02-template-string.test.js', () => {

    test('getSaludo debe retornar hola Fernando !!', () => {

        // 1. inicialización
        const nombre = 'Fernando';

        // 2. estímulo
        const saludo = getSaludo(nombre);


        // 3. observar el comportamiento
        expect(saludo).toBe('Hola ' + nombre + '!!');
    })
    
    //getSaludo debe de retornar hola Carlos !! si no hay argumento en el nombre

    test('getSaludo debe retornar hola Carlos !! si no hay argumento en el nombre', () => {

        // 1. inicialización

        // 2. estímulo
        const saludo = getSaludo();
        console.log(saludo);
        // 3. observar el comportamiento
        expect(saludo).toBe('Hola Carlos' + '!!');
    })
})