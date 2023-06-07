
document.addEventListener('DOMContentLoaded', function() {
  
  let formulario = document.querySelector('form');
  let botonEnviar = document.querySelector('.fondo__black');
  let divRegistrarse = document.querySelector('.registrate');


  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

  
    let correo = document.getElementById('email').value;
    let contraseña = document.getElementById('contraseña').value;

   
    if (correo && contraseña) {
      
      let usuario = {
        correo: correo,
        contraseña: contraseña
      };

  
      let usuarioJSON = JSON.stringify(usuario);


      localStorage.setItem('usuario', usuarioJSON);

     
      let dominio = correo.split('@')[1];

      
      divRegistrarse.innerHTML = '<h1>Bienvenido ' + dominio + ' <i class="bi bi-person-vcard-fill"></i></h1>' +
                                  '<hr>' +
                                  '<p><strong>El registro es necesario</strong> para garantizar la seguridad de la página y de los usuarios.</p>';

      
      formulario.reset();
    }
  });

  // Comprueba si hay un usuario almacenado en el almacenamiento local
  let usuarioJSONGuardado = localStorage.getItem('usuario');
  if (usuarioJSONGuardado) {
    // Convierte la cadena JSON a un objeto de usuario
    let usuarioGuardado = JSON.parse(usuarioJSONGuardado);

    // Obtén el dominio del correo electrónico almacenado
    let dominioGuardado = usuarioGuardado.correo.split('@')[1];

    // Actualiza el contenido del div de registro con el mensaje de bienvenida
    divRegistrarse.innerHTML = '<h1>Bienvenido ' + dominioGuardado + ' <i class="bi bi-person-vcard-fill"></i></h1>' +
                                '<hr>' +
                                '<p><strong>El registro es necesario</strong> para garantizar la seguridad de la página y de los usuarios.</p>';
  }
});