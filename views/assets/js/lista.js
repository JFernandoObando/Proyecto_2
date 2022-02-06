obtener_tabla();

function obtener_tabla() {
    $.ajax("/lista", {
        success: function(data, status, xhr) {


            const datoss = JSON.stringify(data);



            var contenido = document.querySelector('#cuerpotabla')

            contenido.innerHTML = '';
            let contador = 1;

            let parse = JSON.parse(datoss)
            let estado;

            for (let valor of parse) {

                if (valor.estado == true) {
                    estado = 'activo'
                }
                if (valor.estado == false) {
                    estado = 'inactivo'
                }
                console.log(valor.estado);
                contenido.innerHTML += `<tr>
                <th scope="row"><button type="button" class="btn btn-danger" onclick="cambiar(${contador})" title="Rol Usuario">-</button> <button type="button" class="btn btn-success" id="admin${contador}" onclick="insertar(${contador})" title="Rol Administrador">↑</button> <button class="btn btn-warning" type="button" onclick="borrar(${contador})" title="Deshabilitar usuario"><img src="/assets/img/delete.png"/></button></th>
                        <td>${valor.id}</td>
                        <td>${valor.usuario}</td>
                        <td>${valor.role}</td>
                        <td>${estado}</td>
                        
                           </tr>`
                console.log(contador);
                contador += 1;



            }

            console.log("hola como estas");

        }
    });
}





function insertar(ida) {


    $.post("/actualizar", {
            id: ida
        },
        function(data, status) {
            alert("Cambio realizado");
        })

    //   obtener_tabla();


}

function cambiar(ida) {


    $.post("/cambio_rol", {
            id: ida
        },
        function(data, status) {
            //       obtener_tabla();
            alert("Cambio realizado");
        })

    // obtener_tabla();


}

function borrar(ida) {


    $.post("/cambio_estado", {
            id: ida
        },
        function(data, status) {

            alert("Cambio realizado");
        })



}

function refres() {
    obtener_tabla();
}