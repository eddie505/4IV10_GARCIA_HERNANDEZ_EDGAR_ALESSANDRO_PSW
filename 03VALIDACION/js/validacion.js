function validar(formulario){

    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checarABC ="qazwsxedcrfvtgbyhnujmikolpñ" + "QAZWSXEDCRFVTGBYHNUJMIKOLPÑ";
    var cadenaNombre = formulario.nombre.value;
    var todoesvalido = true;
    for(var i=0; i <cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad=parseInt(formulario.edad.value);
    if((edad < 1) || (edad >= 100)){
        alert("Ingresa una edad valida entre 1 y 99 años");
        formulario.edad.focus();
        return false;
    }
    var checarABC ="0123456789";
    var cadenaEdad = formulario.edad.value;
    var todoesvalido = true;
    for(var i=0; i <cadenaEdad.length; i++){
        var caracteres = cadenaEdad.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }

    let ingreso = document.getElementById("fecha").value;
    let fechaIngresada = new Date(ingreso);
    let anno = fechaIngresada.getFullYear();
    if (anno < 1923) {
        alert("No se puede ingresar un año menor a 1923");
        return false;
    }

    let email = formulario.correo.value;
    let prueba = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!prueba.test(email)) {
        alert("Ingresa un correo electrónico válido");
        formulario.correo.focus();
        return false;
    }

    return true;
}
