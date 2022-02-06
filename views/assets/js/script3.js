$(document).ready(function() {
    $("#Ingresar").click(function(e) {
        // window.location.href = "index.html";
        let usuarioa = document.getElementById("nomb").value;
        let passwords = document.getElementById("pass").value;
        e.preventDefault();

        console.log(pass);

        $.ajax({
            type: 'POST',
            url: '/login',
            data: {
                usuario: usuarioa,
                password: passwords,

            },
            success: function(data) {
                alert("Desea ingresar");
                //console.log(data.usuario);
                setTimeout("cargarUsuario()", 1000);
                console.log("correcto");


            }

        });

    })
});

function cargarUsuario() {
    console.log("aqui");
    window.location.href = "usuarios.html";
    console.log("aca");
}