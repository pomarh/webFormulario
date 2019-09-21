<?php
$ wget http://memcached.googlecode.com/files/memcached-1.4.5.tar.gz
$ tar xzf memcached-1.4.5.tar.gz 
$ cd memcached-1.4.5
$ ./configure
$ make

$ ./memcached -vv
...
<17 server listening (auto-negotiate)
<18 send buffer was 9216, now 3728270

//llamando los datos
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

//datos para el correo
$destinatario = "poma.hny@gmail.com";
$asunto = "Contacto desde nuestra pagina Web";

$carta = "De: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje ";

//enviar mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensajeDeEnvio.html');
?>