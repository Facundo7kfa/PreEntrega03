
document.addEventListener('DOMContentLoaded', function() {
  
  let formulario = document.querySelector('form');
  let botonEnviar = document.querySelector('.fondo__black');
  let divRegistrarse = document.querySelector('.registrate');

  // 
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value;

    
    if (nombre && correo && contraseña) {
    
      let usuario = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
      };

     
      let usuarioJSON = JSON.stringify(usuario);

      
      sessionStorage.setItem('usuario', usuarioJSON);

      
      divRegistrarse.innerHTML = '<h1>Bienvenido ' + nombre + ' <i class="bi bi-person-vcard-fill"></i></h1>' +
                                  '<hr>' +
                                  '<p><strong>El registro es necesario</strong> para garantizar la seguridad de la página y de los usuarios.</p>';

      
      formulario.reset();
    }
  });

  
  let usuarioJSONGuardado = sessionStorage.getItem('usuario');
  if (usuarioJSONGuardado) {
    
    let usuarioGuardado = JSON.parse(usuarioJSONGuardado);

    
    let nombreGuardado = usuarioGuardado.nombre;

    
    divRegistrarse.innerHTML = '<h1>Bienvenido ' + nombreGuardado + ' <i class="bi bi-person-vcard-fill"></i></h1>' +
                                '<hr>' +
                                '<p> registrado exitosamente </p>';
  }
});