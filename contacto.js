/*FUNCIÓN: SENCILLAMENTE SE LE DÁ LA BIENVENIDA A LA SECCIÓN MEDIANTE LA CUAL EL VISITANTE PUEDE CONTACTARSE CON NOSOTROS  SE LE DA LA CERTEZA QUE LA COMUNICACIÓN ESTA HABLITADA Y QUE A LA BREVEDAD DEVOLVEREMOS EL MENSAJE O NOS PONDREMOS EN CONTACTO*/


"use strict";

function contacto (mensaje) {
    alert (mensaje);
}

contacto("En esta sección podrás contactarte con nosotros. Dejanos tu mensaje y a la brevedad un agente de nuestra página se contactará contigo!");

const opciones = [
    {id: 1, motivo: "publicidad"},
    {id: 2, motivo: "funcionamiento de la página"},
    {id: 3, motivo: "actualización de información"},
    {id: 4, motivo: "otro"},
];

let select = document.getElementById("select");

for (const opcion of opciones) {
    let contenedor = document.createElement("option");
    contenedor.innerText = `ID: ${opcion.id}; Motivo: ${opcion.motivo}`;

    select.appendChild(contenedor);
}

let input = document.getElementById("Telefono");

input.value = "tu nro. sin 0 ni 15"

/*SESSIONSTORAGE*/

let Nombre = sessionStorage.getItem("Nombre");

console.log(nombre);

let telefono = sessionStorage.getItem("Telefono");

console.log(telefono);

let correo = sessionStorage.getItem("Correo");

console.log(correo);

