/*EN ESTA SECCIÓN SE MOSTRARÁN ALGUNAS FUNCIONES SIN APLICACIÓN AÚN EN LA ESTRUCTURA INICIAL DE HTML, PERO AL SOLO EFECTO DE SER EVALUADAS DE CARA A LA ENTREGA FINAL.*/

/*MAXIMO*/
console.log( Math.max(10, 20, 30, 40, 0, -40, -30, -20, -10))

/*MINIMO*/
console.log( Math.min(10, 20, 30, 40, 0, -40, -30, -20, -10))

/*FLOOR*/
console.log(Math. floor(Math.PI))

/*CEIL*/
console.log(Math.ceil(Math.PI))

/*ROUND*/
console.log(Math.round(Math.PI))

/*SQUARE ROOT*/
console.log(Math.sqrt(144))

/*RANDOM*/
console.log(Math.random()*1500)

/*DATE*/
console.log(new Date())

console.log(new Date(2022, 10, 5, 21, 30, 15))

/*SPREAD OPERATOR*/
const nombres1 = ["juan", "pedro", "jorge"];
const nombres2 = ["pablo", "santiago", "nicolas"];

const nombres = [...nombres1, ...nombres2];
console.log(nombres)

/*REST PARAMETERS*/
const sumarNumeros = (...numeros) => {
const resultado = numeros.reduce((acc, num) => acc + num, 0);
return resultado;
};

const resultadoSuma = sumarNumeros(5, 8, 7, 4, 1, 75, 80, 32, 9, 10);
console.log(resultadoSuma);

/*ASINCRONÍA*/
setTimeout(() => {
    console.log("Proceso Asincrónico con tardanza de 5 seg.");
}, 5000);

