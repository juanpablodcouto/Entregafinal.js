/*CONDICIONAL: A TRAVES DEL USO DE UN CONDICIONAL SE RECIBE AL VISITANTE CONSULTANDOLE SI DESEA HACER PUBLICIDAD EN NUESTRA PAGINA. EN CASO DE QUE DIGA QUE SI, SE LO INIVTA A DIRIGIRSE A LA SECCIÓN DE CONTACTOS. EN CASO DE QUE DIGA QUE NO SE LE DA LA BIENVENIDA AL SITIO PREMITIENDOLE QUE PUEDA EMPEZAR A NAVEGAR*/


let intencion = prompt ("Queres hacer publicidad en nuestra página? SI/NO")

if (intencion == "SI") {
    alert ("dirigite a nuestra sección de contacto y contanos de tu negocio")
}
else {
    alert ("Continúa navegando en YerbaBuena.com!")
}