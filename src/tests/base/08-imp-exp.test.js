import '@testing-library/jest-dom';
import heroes from '../../../data/heroes.js';
import { getHeroeById, getHeroesByOwner } from '../../08-imp-exp.js';

describe('Pruebas en funciones de Héroes', () => {

    test('debe de retornar un heroe por id', () => {

        //1-inicialización
        const id = 1;
        const heroe = getHeroeById(id);
        //2-estímulo
        //const heroeData=heroes.find(h=>h.id===id);            
        const heroeData = heroes.find(heroe => heroe.id === id);
        //3-comportamiento
        expect(heroe).toEqual(heroeData);
    });
    test('debe retornar undefined si heroe no existe', () => {

        //1-inicialización
        const id = 10;
        //2-estímulo
        const heroe = getHeroeById(id);
        //3-comportamiento
        expect(heroe).toBe(undefined);
    });
    test('debe retornar un Array con los heroes de DC', () => {

        //1-inicialización
        const owner = 'DC';
        const heroes=getHeroesByOwner(owner);
        //2-estímulo
        //const heroesData = heroes.filter(h =>h.owner === owner);
        const heroesData = heroes.filter(heroes =>heroes.owner === owner);
        //3-comportamiento
        expect(heroes).toEqual(heroesData);

    });
    test('debe retornar un arreglo con los héroes de Marvel', () => {

        //1-inicialización
        const tamanio=2;
        const owner = 'Marvel';
        const heroes=getHeroesByOwner(owner);
        //2-estímulo
        const heroesDataSize = heroes.filter(heroes =>heroes.owner === owner);
        //3-comportamiento
        expect(heroesDataSize.length).toBe(tamanio);

    });
 

});