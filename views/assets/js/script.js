let contador = 0;
let imagen2 = ("assets/img/dn.jpg")
    /*document.getElementById("bntIngresar").onclick = go;

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
    }*/
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
    var selected = combo.options[combo.selectedIndex].value;
    console.log(selected);




    $(document).ready(function() {
        $.ajax(`/filtrado${selected}`, {
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
                    console.log(valor.nombre_comunidad);
                    contenido.innerHTML += `<tr>
                               <th>${valor.nombre_comunidad}</th>
                               <td>${valor.numero_nacimientos}</td>
                               
                               </tr>`
                }

                grafico_columnas();

            }
        });
    });

}




$.ajax("/filtrado0", {
    success: function(data, status, xhr) {


        const datoss = JSON.stringify(data);

        var contenido = document.querySelector('#contenido')

        contenido.innerHTML = '';
        for (let valor of JSON.parse(datoss)) {

            contenido.innerHTML += `<tr>
                    <th>${valor.nombre_comunidad}</th>
                    <td>${valor.numero_nacimientos}</td>
                    
                       </tr>`
        }


        grafico_columnas();

    }
});

function grafico_columnas() {
    Highcharts.chart('ad', {

        data: {
            table: 'datatable',
            decimalPoint: ','
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Nacimientos por Comunidad '
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

function grafico_pie() {
    Highcharts.chart('ad', {

        data: {
            table: 'datatable',
            decimalPoint: ','
        },
        chart: {
            type: 'pie'
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








//document.getElementById("cancelar").onclick = regresar;
/*
$(document).ready(function() {
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("cont").value;
    let passw = document.getElementById("cont2").value;
    let user = document.getElementById("usuario").value;
    //var desahabilitar = document.getElementById("enviar").disabled = true;

    $("#enviar").click(function(e) {
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
                })
    })
})*/