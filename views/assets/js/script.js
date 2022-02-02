//cargar funciones de grafica Highcharts
/*const chart = Highcharts.chart('ad', {
    data: {
        //llamar el id datatable del index
        table: 'datatable',
        switchRowsAndColumns: true
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Gráfica'
    },
    exporting: {
        enabled: false,
        csv: {
            //delimitar el csv con punto y coma
            itemDelimiter: ';'
        }
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Unidades'
        }
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});

// llamada para exportar a pdf
document.getElementById('botonpdf').addEventListener('click', () => {
    chart.exportChart({
        type: 'application/pdf',
        filename: 'grafica'

    });

});

//llamada para exportar a png
document.getElementById('botonpng').addEventListener('click', () => {
    chart.exportChart();
    console.log("sasdsa");
});

//llamada para exportar a csv
document.getElementById('botoncsv').addEventListener('click', () => {
    chart.downloadCSV();
    console.log("sasdsa");
});

//exportar por navbar
document.getElementById('botonpdf2').addEventListener('click', () => {
    chart.exportChart({
        type: 'application/pdf',
        filename: 'grafica'

    });

});

//exportar por navbar
document.getElementById('botonpng2').addEventListener('click', () => {
    chart.exportChart();
    console.log("sasdsa");
});

//exportar por navbar
document.getElementById('botoncsv2').addEventListener('click', () => {
    chart.downloadCSV();
    console.log("sasdsa");
});

//cambiar la grafica a plano
document.getElementById('plain').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

//cambiar la grafica a plano invertido
document.getElementById('inverted').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

//cambiar la grafica a polar
document.getElementById('polar').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});

//cambiar la grafica a plano para navbar
document.getElementById('plain2').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: false,
            polar: false
        },
        subtitle: {
            text: 'Plain'
        }
    });
});

//cambiar la grafica a plano invertido para navbar
document.getElementById('inverted2').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

//cambiar la grafica a polar para navbar
document.getElementById('polar2').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        subtitle: {
            text: 'Polar'
        }
    });
});

//filtra de ciudades a productos
document.getElementById('calendar').addEventListener('click', () => {
    chart.update({
        data: {
            switchRowsAndColumns: !chart.options.data.switchRowsAndColumns

        }
    });
});
*/
// Create the chart

//const { json } = require("body-parser");

const chart = Highcharts.chart('ad', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Avance 21-01-2022'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Edad Madres'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [{
        name: "Nacimientos",
        colorByPoint: true,
        data: [{
                name: "Global",
                y: 62.74,
                drilldown: "Global"
            },
            {
                name: "Andalucía",
                y: 62.74,
                drilldown: "Andalucía"
            },
            {
                name: "Aragón",
                y: 10.57,
                drilldown: "Aragón"
            },
            {
                name: "Asturias, Principado de",
                y: 7.23,
                drilldown: "Asturias, Principado de"
            },
            {
                name: "Balears, Illes",
                y: 5.58,
                drilldown: "Balears, Illes"
            },
            {
                name: "Canarias",
                y: 4.02,
                drilldown: "Canarias"
            },
            {
                name: "Cantabria",
                y: 1.92,
                drilldown: "Cantabria"
            },
            {
                name: "Castilla y León",
                y: 1.92,
                drilldown: "Castilla y León"
            },
            {
                name: "Castilla-La Mancha",
                y: 1.92,
                drilldown: "Castilla-La Mancha"
            },
            {
                name: "Cataluña",
                y: 1.92,
                drilldown: "Cataluña"
            },
            {
                name: "Comunitat Valenciana",
                y: 1.92,
                drilldown: "Comunitat Valenciana"
            },
            {
                name: "Extremadura",
                y: 1.92,
                drilldown: "Extremadura"
            },
            {
                name: "Galicia",
                y: 1.92,
                drilldown: "Galicia"
            },

        ]
    }],
    drilldown: {
        series: [{
                name: "Global",
                id: "Global",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Andalucía",
                id: "Andalucía",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Aragón",
                id: "Aragón",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Asturias, Principado de",
                id: "Asturias, Principado de",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Balears, Illes",
                id: "Balears, Illes",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Canarias",
                id: "Canarias",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },

            {
                name: "Cantabria",
                id: "Cantabria",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Castilla y León",
                id: "Castilla y León",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Castilla-La Mancha",
                id: "Castilla-La Mancha",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Cataluña",
                id: "Cataluña",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Comunitat Valenciana",
                id: "Comunitat Valenciana",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },
            {
                name: "Extremadura",
                id: "Extremadura",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },

            {
                name: "Galicia",
                id: "Galicia",
                data: [
                    [
                        "Todas las edades",
                        0.1
                    ],
                    [
                        "Menos de 20",
                        1.3
                    ],
                    [
                        "De 20 a 24",
                        53.02
                    ],
                    [
                        "De 25 a 29",
                        1.4
                    ],
                    [
                        "De 30 a 34",
                        0.88
                    ],
                    [
                        "De 35 a 39",
                        0.56
                    ],
                    [
                        "De 40 a 44",
                        0.45
                    ],
                    [
                        "De 45 a 49",
                        0.49
                    ],
                    [
                        "De 50 a 54",
                        0.32
                    ],
                    [
                        "De 55 a 59",
                        0.29
                    ],
                    [
                        "De 60 y más",
                        0.79
                    ],
                ]
            },

        ]
    }
});


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



$(document).ready(function() {
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
                console.log(valor.id_padre);
                contenido.innerHTML += `<tr>
                       <th>${valor.id_padre}</th>
                       <td>${valor.rango_edad}</td>
                       <td></td>
                       </tr>`
            }
        }
    });




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

});