// Ejercicio 1: Desestructuración en objetos anidados.
const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};
const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);
// 1. Predecir: Pensé que solo saldría la edad.
// 2. Registrar: 30 y undifined.
// 3. Explicar:  El resultado es 30 porque a la edad se le asignó ese valor y el otro resultado es undifined ya que no se le asigno un valor al salario.



// Ejercicio 2: Uso del operador spread en la fusión de objetos. 
const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);
// 1. Predecir: Se mostrará el objeto A y B combinados.
// 2. Registrar: { a: 1, b: 4, c: 5, d: 6 }.
// 3. Explicar: Al usar spread si se unen los arreglos sin embargo b y c toman los valores de objetoB ya que spread usa los valores de derecha a izquierda.



// Ejercicio 3: Ámbito de variables en funciones y bloques
const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();
// 1. Predecir: Aparece solo c
// 2. Registrar: Solo se muestra el var y menciona que a no está definido
// 3. Explicar: a y b solo existen en el bloque donde fueron declaradas por eso no aparecen. 



// Ejercicio 4: Propiedades de objetos inmutables
const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);
// 1. Predecir: Se mostrará 29.
// 2. Registrar: 29.
// 3. Explicar: Como se ha utilizado Object.freeze la variable se mantendrá igual a pesar de todos los cambios que se han realizado después.



// Ejercicio 5: Manipulación de arreglos sin modificar el original
const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);
// 1. Predecir: [ 1, 2, 3 ][ 1, 2, 3, 4 ]
// 2. Registrar: [ 1, 2, 3 ][ 1, 2, 3, 4 ]
// 3. Explicar: En el nuevo se utilizó el concat al original y por eso se agregó el 4.



// Ejercicio 6: Acceso a elementos de un arreglo con destructuración
const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);
// 1. Predecir: manzana , naranja
// 2. Registrar: manzana , naranja
// 3. Explicar: Los elementos del arreglo ahora tienen variables y por eso los llaman.



// Ejercicio 7: Comportamiento del ámbito de let en bucles anidados 
for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}
// 1. Predecir: Imprime 1 tres veces
// 2. Registrar: 0 1 0 1 0 1
// 3. Explicar: Let crea un valor para cada iteración del bucle ya que el uso de let permite reutilizar la misma variable en diferentes bucles sin generar conflicto.



// Ejercicio 8: Uso del operador spread para combinar arreglos
const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);
// 1. Predecir: [1,2,3,3,4,5]
// 2. Registrar: [ 1, 2, 3, 3, 4, 5 ]
// 3. Explicar: A diferencia de los objetos en arreglos como son elementos se concatenan de manera normal.



// Ejercicio 9: Alcance y captura de variables dentro de una función
const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();
// 1. Predecir: Luis 25
// 2. Registrar: Luis 25
// 3. Explicar: Con var si se puede reasignar de Luis a Ana, mientras que let se mantiente igual a lo primero que se le asigna.