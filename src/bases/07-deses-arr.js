
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );

// console.log(personajes[0]);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const useState = ( valor ) => {
    return [valor, ()=>{console.log('Hola Mundo');}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();