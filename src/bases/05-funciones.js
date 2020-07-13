
// Funciones en JS
const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = ( ) => `Hola Mundo`;

// console.log(saludar('Mauricio'))
console.log(saludar2('Mauricio Diaz'))
console.log(saludar3('Mauricio Antonio'))
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    })
const user = getUser();

console.log( user );

// Tarea
const getUsuarioActivo = (nombre) => ({
        uid: '123456',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Mauricio');
console.log(usuarioActivo);