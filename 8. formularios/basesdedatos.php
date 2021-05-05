<?php

$link = mysql_connect("127.0.0.1","emanuel","");

$db = mysql_select_db("informacion",$link) or die("<h2>error de conexion<h2/>");
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];

$req = (strlen($nombres)*strlen($apellidos)) or die("No se han llenado todos los campos");


mysql_query("INSERT INTO informacion VALUES ('$nombre','$apellido' )", $link)or die("<h2>error de envio de archivo<h2/>");

echo'<h2>gracias por registrarse<h2/>';
?>

