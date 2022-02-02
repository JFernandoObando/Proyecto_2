/*$('#formul').on('submit', function(e) {
        e.preventDefault();
        let nuevo = $('#nombre');
        $.ajax({
            url: '/form',
            method: 'POST',
            data: {
                name: nuevo.val()
            },
            success: function(response) {
                console.log(response);
            }
        })
    })*/
/*$(document).ready(function() {
    $('#enviar').click(function() {
        let nombre = document.getElementById('nombre').value;
        console.log(nombre);
    })
})*/
/*
$('#enviar').click(function() {
    let nombre = document.getElementById('nombre').value;
    console.log(nombre);
    $.ajax({
        url: "/form",
        method: "POST",
        // contentType: "application/json",
        data: nombre,
        success: function(data) {
            console.log("ssee envio");
            console.log(nombre);
        }
    })
})*/


/*

var nombre = $('form').serialize();
var namea = $('#nombre').val();
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(namea);
    var datos = new FormData(formulario);
    // console.log(datos.get('nombre'));
    console.log(nombre);

    /*  $.post({


          })
    })*/

$.ajax({
    url: "/form",
    method: "POST",
    // contentType: "application/json",
    data: $('#formulario').serialize(),
    //  data: nombre,
    success: function(data) {
        console.log("ssee envio");
        console.log(data);
    }
})

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
                alert("Data: " + data + "\nStatus" + status + "\nEnvio correcto");
            })
    })
})