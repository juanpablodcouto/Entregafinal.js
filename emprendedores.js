/*CICLO: AL HABER EN LA PÁGINA YERBABUENA.COM, DOS SECCIONES DONDE SE PUEDE HACER PUBLICIDAD DE NEGOCIOS, AL INGRESAR A LA SECCIÓN "EMPRENDEDORES" SE LE ACLARA AL VISITANTE QUE EN CASO DE QUE DESEE HACER PUBLICIDAD EN ESTA SECCIÓN (LA CUAL ES MAS BARATA), DEBERÁ CUMPLIR CON CIERTOS REQISITOS QUE HAGAN CALIFICAR SU NEGOCIO EN PEQUEÑO PROYECTO Y NO EN UN COMERCIO CONSOLIDADO, PARA LO CUAL SE LE SOLICITA QUE INGRESE EL TIEMPO DE EXISTENCIA DEL EMPRENDIMIENTO Y SU FACTURACIÓN MENSUAL, SACANDO LUEGO UN PROMEDIO Y ACLARANDOSE PREVIAMENTE QUE PARA CALIFICAR COMO "EMPRENDEDOR" Y PODER ACCEDER A LOS BENEFICIOS DE PUBLICITAR EN ESTA SECCIÓN SU FACTURACIÓN MENSUAL PROMEDIO NO PODRÁ EXCEDER LOS $50.000*/


let cantmeses = Number (prompt("Publicitar en EMPRENDEDORES tiene descuentos en relación a comercios. Para determinar si su negocio califica en este rubro no debe superar 12 meses de vigencia ni un promedio de $50.000 de ingresos mensuales. Por favor, Ingrese meses de vigencia de su emprendimiento"));

let i;
let acumulador = 0

for (i = 1; i<= cantmeses; i++) {
    let facturacion =Number (prompt("ingrese la facturacion mensual de cada uno los meses indicados"));
    acumulador = acumulador + facturacion;
}

let promedio = acumulador / cantmeses

alert ("el promedio de facturación es " + promedio);

