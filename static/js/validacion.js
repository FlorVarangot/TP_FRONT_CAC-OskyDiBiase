
function validarFormulario() {
    // Entrada
    var nombre = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var checkboxes = document.querySelectorAll('input[name="asuntos"]:checked');
  
    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || email.trim() === '' || checkboxes.length === 0) {
      alert("Por favor, completa todos los campos.");
      return false; // Evita que el formulario se envíe
    } else {
      return true;
    }
}


//   Imagenes caja contacto
document.addEventListener('DOMContentLoaded', function() {
    var cajaContacto = document.getElementById('cajaContacto');
    var imagenes = ['/static/img/Contacto/1.jpg', '/static/img/Contacto/2.jpg', '/static/img/Contacto/3.jpg', '/static/img/Contacto/4.jpg']; // Lista de imágenes a mostrar
    var tiempoEntreCambio = 3000; // Tiempo en milisegundos entre cada cambio 
    var indice = 0;

    // Función para cambiar la imagen
    function cambiarImagen() {
        cajaContacto.style.backgroundImage = 'url(' + imagenes[indice] + ')';
        indice = (indice + 1) % imagenes.length; // Avanza al siguiente índice, volviendo al inicio cuando se alcanza el final
    }

    // Llama a la función cambiarImagen inicialmente
    cambiarImagen();

    // Establece un intervalo para cambiar la imagen cada cierto tiempo
    setInterval(cambiarImagen, tiempoEntreCambio);
});