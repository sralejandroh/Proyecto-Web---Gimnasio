//CREA LA CONEXIÓN ENTRE LA ETIQUETA DE FORMULARIO Y JS
//TAMBIÉN PERMITE ACTIVAR LA ESCUCHA DEL FORMULARIO AL PRESIONAR EL BOTÓN SUBMIT
document.getElementById('formularioRegistro').addEventListener('submit', function(e) {
    
    //PREVIENE QUE LA PÁGINA TENGA LA RECARGA POR DEFECTO
    e.preventDefault();

    //LA VARIABLE GUARDAR EL OBJETO TIPO FORM QUE GUARDARÁ EL FORMULARIO Y SUS CAMPOS
    let formulario = new FormData(document.getElementById('formularioRegistro'));

    //SIRVE PARA CREAR LA PETICIÓN DE REGISTRO DE PHP
    fetch('registro.php', {
        //MÉTODO DE INSERCIÓN O ACTUALIZACIÓN DE DATOS
        method : 'POST',
        //ES EL OBJETO QUE TENDRÁ LOS CAMPOS DEL FORMULARIO DE REGISTRO
        body : formulario
    })
    //SE CUMPLE LA PROMESA DE LA PETICIÓN FETCH
    //SE RECIBE UN PARÁMETRO EN LA FUNCIÓN FLECHA Y SE TRANSFORMA A UN ARCHIVO JSON QUE SIRVE PARA DATOS ESTUCTURADOS
    .then(res => res.json())
    //YA TRANSFORMADO A FORMATO JSON SE PUEDE ACCEDER A LOS DATOS OBTENIDOS DE LOS CAMPOS DEL FORMULARIO
    .then(data => {
        //FUNCIÓN FLECHA
        //SI LA DATA SE EXTRAE SE OBTIENEN LOS DATOS INCORPORADOS EN LAS ENTRADAS DEL FORMULARIO
        if(data == 'true') {
            document.getElementById('txt_nombre').value = '';
            document.getElementById('txt_apellidos').value = '';
            document.getElementById('int_edad').value = '';
            document.getElementById('txt_telefono').value = '';
            document.getElementById('txt_correo').value = '';
            document.getElementById('txt_contrasena').value = '';
            //MUESTRA SI SE CUMPLE EL INGRESO DE DATOS DESDE EL FORMULARIO
            alert("SE HA CREADO LA CUENTA");
        } else {
            console.log(data);
        }
    });
});
