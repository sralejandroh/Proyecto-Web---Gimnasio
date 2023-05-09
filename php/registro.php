<?php

//CREACION DE VARIABLES
//VALIDARÁ SI HAY O NO UNA ENTRADA EN LOS CAMPOS DEL FORMULARIO
//SI HAY UNA ENTRADA REALIZAR EL MÉTODO POST DEL CAMPO , SI NO AGREGA UN CAMPO VACÍO
$nombre = isset($_POST['txt_nombre']) ? $_POST['txt_nombre'] : '';
$apellidos = isset($_POST['txt_apellidos']) ? $_POST['txt_apellidos'] : '';
$edad = isset($_POST['int_edad']) ? $_POST['int_edad'] : '';
$telefono = isset($_POST['txt_telefono']) ? $_POST['txt_telefono'] : '';
$correo = isset($_POST['txt_correo']) ? $_POST['txt_correo'] : '';
$contrasena = isset($_POST['txt_contrasena']) ? $_POST['txt_contrasena'] : '';

//CONEXIÓN CON LA BASE DE DATOS MYSQL
try{
    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=gimnasio", 'root', 'Alejinis.2412');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO usuarios(nombre_usuario,apellido_usuario,edad_usuario,telefono_usuario,correo_usuario,contrasena_usuario) VALUES (?,?,?)');
    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $apellidos);
    $pdo->bindParam(3, $edad);
    $pdo->bindParam(4, $telefono);
    $pdo->bindParam(5, $correo);
    $pdo->bindParam(6, $contrasena);

    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');
}catch(PDOException $error){
    echo $error->getMessage();
    //CIERRA LA CONEXIÓN
    die();
}

?>