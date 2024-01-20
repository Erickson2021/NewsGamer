document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event)
    {
        var ascii=event.keyCode  || event.wich;
        if((ascii>=48 && ascii <= 57 ) || (ascii==46)) 
    {
        window.event.preventDefault();
        return;
    }
});
document.querySelector('input[name="txtapellido"]').addEventListener("keypress",function(event)
    {
        var ascii=event.keyCode  || event.wich;
        if((ascii>=48 && ascii <= 57 ) || (ascii==46)) 
    {
        window.event.preventDefault();
        return;
    }
});
document.querySelector('input[name="txtfono"]').addEventListener("keypress",function(event)
    {
        var longitud=document.querySelector('input[name="txtfono"]').value.length;
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
    
    let test=/^\s*$/;
    if(text.test(frm.txtnombre.value)){

        window.event.preventDefault();
        alert("Ingrese el nombre"); return;
    }
    if(test.test(frm.txtapellido.value)){
        window.event.preventDefault();
        alert("Ingrese el apellido"); return;
    }
    test=/^[2-9][0-9]{7,9}$/;
    if(!test.test(frm.txtfono.value)){
        window.event.preventDefault();
        alert("Fono entre 7 a 10 digitos"); return; 
    }

    test=/^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.txtemail.value))
    {
        window.event.preventDefault();
        alert("formato de email incorrecto")
        return;
    }
    
    alert("Datos ingresados")


 }