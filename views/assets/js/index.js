function ShowSelected() {
    var combo = document.getElementById("cat");
    var selected = combo.options[combo.selectedIndex].value;
    var combo2 = document.getElementById("cat1");
    var selected2 = combo2.options[combo2.selectedIndex].value;



    filtra(selected, selected2);

}

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
        }
    });
}

function grafico_pie() {
    var colors = ['#FF530D', '#E82C0C', '#FF0000', '#E80C7A', '#E80C7A'];
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
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        },

    });
}