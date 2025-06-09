// fUNCION PARA OSTRAR UN CUADRO DE DIALOGO EMERGENTE
function mostrarMensaje(){
    alert("HOLA MUNDO");
}
function imprimirVariables() {
    let nombre = "Camila"
    let edad = 24;
/// forma tradicional  de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
/// froma moderna de concatenar cademas 
    console.log(`nombre: ${nombre}, edad ${edad}`);
    console.error("Error: no funciona");
    console.warn("Advertencia; zzz");
}


}