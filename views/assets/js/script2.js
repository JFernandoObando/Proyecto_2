//const bcrypt = require("bcryptjs");
document.getElementById("cancelar").onclick = regresar;
$(document).ready(function() {


    //var desahabilitar = document.getElementById("enviar").disabled = true;

    $("#enviar").click(function(e) {
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("cont").value;
        let passw = document.getElementById("cont2").value;
        let user = document.getElementById("usuario").value;
        console.log(user);
        e.preventDefault();

        console.log(pass);

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
                console.log("correcto");
            }
        });
        /*    $.post("/form", {
                    nombre_completo: nombre,
                    usuario: user,
                    password: pass
                },

                function(data, status) {

                    alert("Registrado Correctamente");
                    document.getElementById("enviar").onclick = window.location.href = "index.html";
                })*/
    })
})

document.getElementById("cancelar").onclick = regresar;

function regresar() {
    window.location.href = "index.html";
}