$(document).ready(function() {
    $("#enviar").click(function(e) {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let pass = document.getElementById("cont").value;
        let user = document.getElementById("usuario").value;
        $.post("/form", {
                nombre_completo: nombre,
                usuario: user,
                password: pass
            },
            function(data, status) {
                alert("Registrado Correctamente");
                document.getElementById("enviar").onclick = window.location.href = "index.html";
            })
    })
})