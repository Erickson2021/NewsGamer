document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event)
    {
        var ascii=event.keyCode  || event.wich;
        if((ascii>=48 && ascii <= 57 ) || (ascii==46)) 
    {
        window.event.preventDefault();
        return;
    }
});
document.querySelector('input[name="txtcelular"]').addEventListener("keypress",function(event)
    {
        var longitud=document.querySelector('input[name="txtcelular"]').value.length;
        if(longitud>= 9)
    {
    window.event.preventDefault();
        return;
    }
        var ascii=event.keyCode || event.wich;
        if(ascii<48 || ascii >57 )
    {
    window.event.preventDefault();
        return; 
    }
});
function registrar(frm){
        test=/^\s*$/;
        if(test.test(frm.txtnombre.value))
    {
    window.event.preventDefault();
        alert("Ingresa su Nombre y Apellido");
        return;
}
test=/^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
        if(!test.test(frm.txtemail.value))
    {
    window.event.preventDefault();
        alert("formato de Email Incorrecto");
        return;
    }
    test=/^\d{9}$/;
        if(!test.test(frm.txtcelular.value))
    {
    window.event.preventDefault();
        alert("Ingresa su Numero Telefonico");
        return;
    }
    alert("Datos Ingresados Correctamente")
}


