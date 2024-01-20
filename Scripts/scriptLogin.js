var usuario = document.querySelector('input[type="email"]');
var clave = document.querySelector('input[type="password"]');

usuario.addEventListener('focus', function(event){

    event.target.style.background = 'blue';
    event.target.style.color = 'yellow';
});

usuario.addEventListener('blur', function(event){

    event.target.style.background = 'white';
    event.target.style.color = 'black';
});

clave.addEventListener('focus',function(event){

    event.target.style.background = 'blue';
    event.target.style.color = 'yellow';
})

clave.addEventListener('blur', function(event){

    event.target.style.background = 'white';
    event.target.style.color = 'black';
});

function registrar(frm){
    test=/^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.correo.value))
{
window.event.preventDefault();
    alert("formato de Email Incorrecto");
    return;
}
alert("Datos Ingresados Correctamente")
}


