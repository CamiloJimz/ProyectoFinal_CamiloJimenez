function Validardatos(){
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");


    if(nombre.value == ''){
        nombre.classList.remove('success');
        nombre.classList.add("error");
    }else{
        nombre.classList.remove('error');
        nombre.classList.add("success");
    }

    if(email.value == ''){
        email.classList.remove('success');
        email.classList.add("error");
    }else{
        email.classList.remove('error');
        email.classList.add("success");
    }

    if(mensaje.value == ''){
        mensaje.classList.remove('success');
        mensaje.classList.add("error");
    }else{
        mensaje.classList.remove('error');
        mensaje.classList.add("success");
    }

    
}
