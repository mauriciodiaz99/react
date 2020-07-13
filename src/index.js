// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

const { heroes } = require("./data/heroes");

const getHeroeById = (id) => {
    return heroes.find( ( heroe ) );
}

console.log( getHeroeById(2));