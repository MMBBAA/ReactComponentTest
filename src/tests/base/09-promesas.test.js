
import '@testing-library/jest-dom';
import heroes from '../../../data/heroes.js';

import { getHeroeByIdAsync } from '../../09-promesas.js';

describe('Pruebas con promesas', () => {
    //done es un callback que se le pasa a una promesa, le dice a jest cuando debe terminar la prueba
    test('getHeroeByIdAsync debe retornar un Heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).
            then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('getHeroeByIdAsync debe obtener un error si el héroe por id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});









