
const persona = {
    nombre: 'Mauricio',
    apellido: 'Diaz',
    edad: 45,
    direccion: {
        ciudad: 'San Pedro Sula',
        zip: 21101,
        lat: 14.3891,
        lng: 34.23912
    }
};


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.table( persona );
console.log(persona2);