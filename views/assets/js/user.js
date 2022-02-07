var radio = $('input:radio[name=rtb]:checked').val();


$("#mi_radio").change(function() {
    radio = $('input:radio[name=rtb]:checked').val();

    var bol;
    if (radio == "padre") {
        document.getElementById("cat1").disabled = true;
        document.getElementById("cat2").disabled = false;

    }
    if (radio == "madre") {
        document.getElementById("cat1").disabled = false;
        document.getElementById("cat2").disabled = true;
    }

});

//FUncion Boton filtrar usuarios
function ShowSelected() {

    var combo = document.getElementById("cat");
    var selected = combo.options[combo.selectedIndex].value;
    var combo2 = document.getElementById("cat1");
    var selected2 = combo2.options[combo2.selectedIndex].value;
    var combo3 = document.getElementById("cat2");
    var selected3 = combo3.options[combo3.selectedIndex].value;
    $(document).ready(function() {

        var radio = $('input:radio[name=rtb]:checked').val();


    });

    if (radio == "madre") {
        filtra(selected, selected2);
    }
    if (radio == "padre") {
        filtra1(selected, selected3);
    }

}


//Peticion ajax para filtrado
function filtra(selected, sel) {

    $.ajax('filtradot', {
        type: 'POST',
        url: '/filtradot',
        data: {
            dato: sel,
            dato1: selected,

        },
        success: function(data, status, xhr) {

            const datoss = JSON.stringify(data);


            var contenido = document.querySelector('#contenido')
            contenido.innerHTML = '';
            for (let valor of JSON.parse(datoss)) {

                contenido.innerHTML += `<tr>
                           <th>${valor.edad_madre}</th>
                           <td>${valor.numero_nacimientos}</td>
                           
                           </tr>`
            }

            grafico_columnas();
            grafico_pie();

        }
    });
}

//Filtrados
function filtra1(selected, sel) {

    $.ajax('filtradof', {
        type: 'POST',
        url: '/filtradof',
        data: {
            dato: sel,
            dato1: selected,


        },
        success: function(data, status, xhr) {

            const datoss = JSON.stringify(data);

            var contenido = document.querySelector('#contenido')
            contenido.innerHTML = '';
            var anios;
            for (let valor of JSON.parse(datoss)) {
                if (valor.sk_padre == 2) {

                }

                contenido.innerHTML += `<tr>
                           <th>${valor.rango_edad}</th>
                           <td>${valor.numero_nacimientos}</td>
                         
                           
                           </tr>`
            }

            grafico_columnas();
            grafico_pie();

        }
    });
}


//Filtrado inicial
$.ajax("/filtrado0", {
    success: function(data, status, xhr) {


        const datoss = JSON.stringify(data);

        var contenido = document.querySelector('#contenido')

        contenido.innerHTML = '';
        for (let valor of JSON.parse(datoss)) {

            contenido.innerHTML += `<tr>
                    <th>${valor.edad_madre}</th>
                    <td>${valor.numero_nacimientos}</td>
                    
                       </tr>`
        }


        grafico_columnas();
        grafico_pie();


    }
});

//Grafica de columnas
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
                text: 'Nacimientos'
            }
        }
    });
}

//Grafica pastel

function grafico_pie() {
    var colors = ['#006262', '#E82C0C', '#FF0000', '#FF530D ', '#E80C7A'];
    Highcharts.chart('ab', {

        data: {
            table: 'datatable',
            decimalPoint: ','
        },
        colors: colors,
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Total Nacimientos por Comunidad '
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Nacimientos'
            }
        },

    });
}