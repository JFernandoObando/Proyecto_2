document.getElementById("cancelar").onclick = regresar;

$(document).ready(function() {




    $("#enviar").click(function(e) {
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("cont").value;
        let passw = document.getElementById("cont2").value;
        let user = document.getElementById("usuario").value;

        e.preventDefault();



        $.ajax({
            type: 'POST',
            url: '/form',
            data: {
                nombre_completo: nombre,
                usuario: user,
                password: pass,
                password2: passw
            },
            success: function(data) {


                if (data == "1") {
                    var contenido = document.getElementById('mens')


                    contenido.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Ingrese todos los campos  </div>    </div>`

                } else if (data == "2") {
                    var contenido = document.getElementById('mens')


                    contenido.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Usuario ya existe</div>    </div>`
                } else if (data == "3") {
                    var contenido = document.getElementById('mens')


                    contenido.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Las contraseñas no coinciden</div>    </div>`
                } else {
                    var contenido = document.getElementById('mens')
                    var contenido2 = document.getElementById('bot')


                    contenido.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Usuario registrado exitosamente</div>    </div>`
                    contenido2.innerHTML = `  <button type="button" class="btn btn-primary "  onclick="location.href='login.html'" >Log in</button>`
                }

            }
        });
    })
})

document.getElementById("cancelar").onclick = regresar;

function regresar() {
    window.location.href = "index.html";
}