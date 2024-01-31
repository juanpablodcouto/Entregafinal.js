/*ARRAYS: A TRAVES DEL INGRESO DE DATOS POR PARTE DEL USUARIO SE LE PERMITE CALCULAR EL PROMEDIO DE DINERO QUE VA A DESTINAR A PUBLICIDAD POR MES LUEGO DE INDICAR AQUEL CUANTOS MESES Y QUÉ IMPORTES MENSUALES PARTICULARES TIENE PENSADO INVERTIR EN PUBLCIDAD */
let notas = [];

let opcion = Number (prompt("EN ESTA SECCIÓN ENCONTRARAS TODA LA INFO SI LO QUE QUIERES ES HACER PUBLICIDAD DE TU NEGOCIO EN NUESTRA PÁGINA. A TRAVES DE ESTE MENSAJE TE AYUDAREMOS A DETERMINAR EL PROMEDIO MENSUAL DE TU GASTO PUBLICITARIO EN YERBABUENA.COM: \n0 - Salir\n1 - Ingresar monto que querrias destinar a publicidad el mes subsiguiente"));
while(opcion != 0) {
    switch(opcion) {
        case 1: 
            let nota = Number(prompt("Ingrese el monto que va a destinar a publicidad el mes siguiente"));
            notas.push(nota);
            break;
        case 2:
            let sumatoria = 0;
            for (let i = 0; i < notas.length; i++) {
                sumatoria += notas[i]
            }
            alert("El promedio mensual de tu gasto en publicidad en nuestra página es:" + sumatoria / notas.length);
            break;
        case 0: alert("Adios");
            break;
            default:
            alert("Ingreso equivocado");
    }
    opcion = Number (prompt("Ingrese la opción deseada: \n0 - Salir\n1 - Ingresar monto destinado a publicidad del mes subsiguiente\n2 - Calcular el promedio"));
}