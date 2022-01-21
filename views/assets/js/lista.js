var json = [{
        nombre: "Juan",
        rol: "Usuario",
    },
    {
        nombre: "Fernando",
        rol: "Usuario",
    },
    {
        nombre: "Robb",
        rol: "Administrador",
    }
];

construirtabla(json)
console.log(json);

function construirtabla(data) {

    var tabla = document.getElementById('cuerpotabla')
    for (var i = 0; i < data.length; i++) {

        var fila = `<tr> 
                          <th scope="row"><button type="button" class="btn btn-danger">-</button></th>
                            <td> ${i+1}</td>
                            <td> ${data[i].nombre}</td>
                            <td> ${data[i].rol}</td>
                        </tr>`
        tabla.innerHTML += fila
    }
}