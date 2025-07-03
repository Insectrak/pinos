<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $correo = filter_var(trim($_POST["correo"]), FILTER_SANITIZE_EMAIL);
    $dni_ce = strip_tags(trim($_POST["dni_ce"]));
    $telefono = strip_tags(trim($_POST["telefono"]));
    $provincia = strip_tags(trim($_POST["provincia"]));
    $distrito = strip_tags(trim($_POST["distrito"]));
    $direccion = strip_tags(trim($_POST["direccion"]));
    $producto_servicio = strip_tags(trim($_POST["producto_servicio"]));
    $detalle_reclamo = strip_tags(trim($_POST["detalle_reclamo"]));

    // Valida que los campos requeridos no estén vacíos y el correo sea válido
    if (empty($nombre) OR empty($correo) OR empty($dni_ce) OR empty($telefono) OR
        empty($provincia) OR empty($distrito) OR empty($direccion) OR
        empty($producto_servicio) OR empty($detalle_reclamo) OR !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, completa todos los campos del formulario correctamente.";
        exit;
    }

    $destinatario = "pinos@grupoinmobiliarioes.com"; // Reemplaza con el correo para reclamos
    $titulo_correo = "Nuevo Reclamo Recibido";

    // Construye el cuerpo del correo electrónico
    $cuerpo_correo = "Se ha recibido un nuevo reclamo con la siguiente información:\n\n";
    $cuerpo_correo .= "Nombre: $nombre\n";
    $cuerpo_correo .= "Correo: $correo\n";
    $cuerpo_correo .= "DNI o CE: $dni_ce\n";
    $cuerpo_correo .= "Teléfono: $telefono\n";
    $cuerpo_correo .= "Provincia: $provincia\n";
    $cuerpo_correo .= "Distrito: $distrito\n";
    $cuerpo_correo .= "Dirección: $direccion\n";
    $cuerpo_correo .= "Producto/Servicio: $producto_servicio\n\n";
    $cuerpo_correo .= "Detalle del reclamo:\n$detalle_reclamo\n";

    // Configura las cabeceras del correo electrónico
    $cabeceras = "From: $nombre <$correo>\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
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