function validarForma(formulario){
    var usuario = formulario.usuario;
    if(usuario.value == " " || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false
    }

    var password = formulario.password;
    if(password.value == " " || password.value.lenght < 3){
        alert("Debe proporcionar una contraseña mayor a tres letras")
        password.focus();
        password.select();
        return false
    }
    var tecnologia = formulario.tecnologia;
    var checkSeleccion = false;

    for(i=0; i< tecnologia.lenght; i++){
        if(tecnologia[i].checked){
            checkSeleccion = true;
        }
    }
    if(!checkSeleccion){
        alert("Debe seleccionar una tecnologia");
        return false;
    }

    var genero = formulario.genero;
    var radioSelection = false;

    for(i=0; i < genero.lenght; i++){
        if(genero[i].checked){
            radioSelection = true
        }
    }
    if(!radioSelection){
        alert("Debe seleccionar un genero");
    }

    var ocupacion = formulario.ocupacion;
    if(ocupacion.value = " "){
        alert("Debe seleccionar ocupacion");
        return false;
    }
    alert("Formulario valido, enviado datos al servidor")
    return true;

}