<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    // Configuración del correo electrónico
    $destinatario = 'soyalejandrocalixto@gmail.com'; // Reemplaza con tu dirección de correo electrónico
    $asunto = 'Nuevo mensaje de formulario de contacto';

    // Obtener los datos del formulario
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    // Construir el cuerpo del mensaje
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Mensaje: $mensaje\n";

    // Enviar el correo electrónico
    $headers = "From: $nombre <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if(mail($destinatario, $asunto, $cuerpo, $headers)) {
        // Respuesta para JavaScript (envío exitoso)
        http_response_code(200);
        echo "El formulario se ha enviado correctamente";
    } else {
        // Respuesta para JavaScript (error en el envío)
        http_response_code(500);
        echo "Error al enviar el formulario";
    }
} else {
    // Respuesta para JavaScript (datos faltantes)
    http_response_code(400);
    echo "Faltan datos del formulario";
}
?>
