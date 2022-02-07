$(document).ready(function() {
    $("#Ingresar").click(function(e) {
        // window.location.href = "index.html";
        let usuarioa = document.getElementById("nomb").value;
        let passwords = document.getElementById("pass").value;
        e.preventDefault();

        console.log(pass);
        var resp = "";
        $.ajax({
            type: 'POST',
            url: '/login',
            data: {
                usuario: usuarioa,
                password: passwords,
                rp: resp

            },
            success: function(data) {
                console.log(data);
                if (data == "error") {

                    var contenido = document.getElementById('incorrecto')


                    contenido.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Contraseña o usuario incorrecto  </div>    </div>`
                    console.log("Usuario o contraseña incorrectos");
                } else if (data == "ingrese usuario y contraseña") {
                    var contenido = document.getElementById('incorrecto')


                    contenido.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Ingrese usuario y contraseña </div>    </div>`
                    console.log("Usuario o contraseña incorrectos");
                } else {
                    var contenido = document.getElementById('incorrecto')


                    contenido.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg><div>
                     Ingreso correcto</div>    </div>`
                    console.log("Usuario o contraseña incorrectos");
                    if (data.rp == "USER_ROLE") {
                        setTimeout("cargarUsuario()", 4000);
                        console.log("USUARIO");
                    }
                    if (data.rp == "ADMIN_ROLE") {
                        setTimeout("cargarAdministrador()", 4000);
                        console.log("ADMINISTRADOR");

                    }


                }



            }

        });

    })
});



function cargarUsuario() {
    console.log("aqui");
    window.location.href = "usuarios.html";
    console.log("aca");
}

function cargarAdministrador() {
    console.log("administrador");
    window.location.href = "admin.html";
}