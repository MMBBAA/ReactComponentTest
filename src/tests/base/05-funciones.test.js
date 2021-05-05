import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../05-funciones.js';

describe('Pruebas en 05-funciones.test.js', () => {

    test('getUser debe de retornar un objeto ', () => {


        //1º-inicialización
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        //2º-estímulo
        const user = getUser();

        //3º-observar el comportamiento
        expect(user).toEqual(userTest);

    })

    
    test('getUsuarioActivo debe de retornar un objeto ', () => {


        //1º-inicialización
        const nombre='Juan';
        const UsuarioActivoTest ={
            uid: 'ABC567',
            username: nombre
        };
        
        //2º-estímulo
        const userActivo = getUsuarioActivo(nombre);

        //3º-observar el comportamiento
        expect(userActivo).toEqual(UsuarioActivoTest);

    })
    
})

