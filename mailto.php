<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($_POST["telefono"]));
    $asunto = strip_tags(trim($_POST["asunto"]));
    $mensaje = strip_tags(trim($_POST["mensaje"]));

    // Valida que los campos requeridos no estén vacíos
    if (empty($nombre) OR empty($mensaje) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, completa todos los campos del formulario correctamente.";
        exit;
    }

    $destinatario = "pinocontacto@grupoinmobiliarioes.com"; // Reemplaza con tu dirección de correo electrónico
    $titulo_correo = "Nuevo mensaje desde el formulario de contacto";

    // Construye el cuerpo del correo electrónico
    $cuerpo_correo = "Nombre: $nombre\n";
    $cuerpo_correo .= "Email: $email\n";
    $cuerpo_correo .= "Teléfono: $telefono\n";
    $cuerpo_correo .= "Asunto: $asunto\n\n";
    $cuerpo_correo .= "Mensaje:\n$mensaje\n";

    // Configura las cabeceras del correo electrónico
    $cabeceras = "From: $nombre <$email>\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "MIME-Version: 1.0\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envía el correo electrónico
    if (mail($destinatario, $titulo_correo, $cuerpo_correo, $cabeceras)) {
         // Redirigir al usuario a la página "Gracias"
        header("Location: /gracias"); // Asegúrate de que esta ruta coincida con la de tu componente Gracias en React
        exit(); // Es importante terminar la ejecución del script después de la redirección
    } else {
        echo "<p>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>";
    }
} else {
    // Si alguien intenta acceder directamente al archivo PHP
    echo "<p>Acceso no permitido.</p>";
}
?>