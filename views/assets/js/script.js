let contador = 0;
let imagen2 = ("assets/img/dn.jpg")
document.getElementById("bntIngresar").onclick = go;
//document.getElementById("bntCerrar").onclick = cerr;

function go() {
    if (document.getElementById("pass").value == 'admin123' && document.getElementById("nomb").value == 'Admin1') {
        window.location.href = "admin.html";
        //document.getElementById("to").innerHTML="<p>El ingreso se realizo exitosamente<\p>"+"<img height = 100px src="+imagen+"></img>"; 

    } else if (document.getElementById("pass").value == 'user123' && document.getElementById("nomb").value == 'User1') {
        window.location.href = "usuarios.html";
        //document.getElementById("to").innerHTML="<p>El ingreso se realizo exitosamente<\p>"+"<img height = 100px src="+imagen+"></img>"; 

    } else {
        document.getElementById("cm").innerHTML = "<img height = 70px src=" + imagen2 + "></img>" + "<p>Usuario o contraseña son incorrectos<\p>" +
            " <p>Porfavor ingresa nuevamente<\p>" +
            "Intento: " + contador

        document.getElementById("btnIngresar").innerHTML = ++contador;
    }
}
//console.log(chart.data);

function capturar() {
    var selected = new Array();

    $(document).ready(function() {

        $("input:checkbox:checked").each(function() {
            console.log($(this).val());
        });

    });
}

function ShowSelected() {
    var combo = document.getElementById("cat");
    var selected = combo.options[combo.selectedIndex].text;
    console.log(selected);

}




$.ajax("/hola", {
    success: function(data, status, xhr) {
        //   convertJsonHtmlTable(data);
        console.log(data);
        const datoss = JSON.stringify(data);
        //const datoq = JSON.parse(datoss);
        console.log("sdfsd");
        //console.log(datoss.rango_edad);
        var contenido = document.querySelector('#contenido')

        contenido.innerHTML = '';
        for (let valor of JSON.parse(datoss)) {
            //   console.log(data.pk_comunidad);
            contenido.innerHTML += `<tr>
                       <th>${valor.nombre_comunidad}</th>
                       <td>${valor.pk_comunidad}</td>
                       <td>${valor.pk_comunidad}</td>
                       </tr>`
        }

        console.log("hola como estas");
        Highcharts.chart('ad', {

            data: {
                table: 'datatable',
                decimalPoint: ','
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Data extracted from a HTML table in the page'
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Units'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<br>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' + this.point.name.toLowerCase();
                }
            }
        });


    }
});






$(document).ready(function() {



})





/*  $.ajax({
      url: '/form',
      type: 'post',
      // dataType: 'json',
      body: { viewID: $("#nombre").val() },
      success: function(body) {
          try {
              console.log("hola mundo");
              var output = JSON.parse(data);
              alert(output);
          } catch (e) {
              alert("Output is not valid JSON: " + data);
          }
      },
      error: function(request, error) {
          alert("AJAX Call Error: " + error);
      }
  });*/


/*
    let formulario = document.getElementById('idformulario');
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        let datos = new FormData(formulario);
        $.ajax({

            type: 'POST',
            // dataType: 'json',
            body: datos,
            success: function(body) {
                try {
                    var output = JSON.parse(data);
                    alert(output);
                } catch (e) {
                    alert("Output is not valid JSON: " + data);
                }
            },
            error: function(request, error) {
                alert("AJAX Call Error: " + error);
            }
        })
    });
*/

/*
    var frm = $("#idformulario"); //Identificamos el formulario por su id
    var datos = frm.serialize();
    /* var request = $.ajax({
              type: "POST", // la variable type guarda el tipo de la peticion GET,POST,..
              url: "/", //url guarda la ruta hacia donde se hace la peticion
              data: datos, // data recive un objeto con la informacion que se enviara al servidor
              //success: function(datos) { //success es una funcion que se utiliza si el servidor retorna informacion
              //   console.log(datos.)
              // },
              dataType: "json" // El tipo de datos esperados del servidor. Valor predeterminado: Intelligent Guess (xml, json, script, text, html).
          })*/
/* var request = $.ajax({
     url: frm.prop("action"), //Leerá la url en la etiqueta action del formulario (archivo.php)
     method: frm.prop('method'), //Leerá el método en etiqueta method del formulario
     data: datos, //Variable serializada más arriba 
     //puede ser de otro tipo
 });
 /*request.done(function(respuesta) {
     console.log(respuesta);
     console.log("sfdasfds");
     console.log(respuesta.foo); //foo es una propiedad (clave), del json que devuelve el servidor
     //Tratamos a respuesta según sea el tipo  y la estructura               
 });*/
/* request.done(function(respuesta) {
     console.log("aqui");
     // console.log(respuesta);
     console.log(respuesta.foo); //foo es una propiedad (clave), del json que devuelve el servidor
     //Tratamos a respuesta según sea el tipo  y la estructura               
 });

 //Este bloque se ejecuta si hay un error
 request.fail(function(jqXHR, textStatus) {
     alert("Hubo un error: " + textStatus);
 });*/