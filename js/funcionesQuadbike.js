function consultar() {

    $.ajax (
               {
                        url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
                        type         : 'GET',
                        dataType     : 'json',
                        // success      :  function(json){
                        //                     $("#idDivConsulta").empty();
                        //                     for (i=0 ; i < json.items.length; i++){
                        //                         $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                        //                     }
                        //                     console.log(json)
                        //                 },

                        success      :  function(json){

                            $("#idDivConsulta").empty();
                            
                            $("#idDivConsulta").append("<table>");
                            
                            $("#idDivConsulta").append("<caption><h3>Detalle de Quadbike</h3></caption>");
                            $("#idDivConsulta").append("<tr><th>Codigo </th><th>Marca</th><th>Modelo</th><th>Id Categoria</th><th>Nombre</th><th>Acciones</th></tr>");
                            for (i=0; i < json.items.length; i++){
                                $("#idDivConsulta").append("<tr>");
                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                $("#idDivConsulta").append('<td><button onclick="cargar('+json.items[i].id+')">Cargar en Formulario</button></td>');
                                $("#idDivConsulta").append("</tr>");
                            }
                            $("#idDivConsulta").append("</table>");

                            console.log(json)
                            },


                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}


function insertar() {
    var quadbike;

    quadbike = {
        id: $("#idQuadbike").val(),
        brand:$("#brandQuadbike").val(),
        model:$("#modelQuadbike").val(),
        category_id:$("#categoryIdQuadbike").val(),
        name:$("#nameQuadbike").val(),

                };

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
            type         : 'POST',
            data         :  quadbike,

            success      :  function(response){
                               console.log(response);
                               $("#idQuadbike").val("");
                               $("#brandQuadbike").val("");
                               $("#modelQuadbike").val("");
                               $("#categoryIdQuadbike").val("");
                               $("#nameQuadbike").val("");
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );



}


function borrar() {

    var quadbike,datosEnvio;

    quadbike      = {id: $("#idQuadbike").val()};
    datosEnvio   = JSON.stringify(quadbike);

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}


function actualizar() {

    var quadbike,datosEnvio;

    quadbike = {
        id: $("#idQuadbike").val(),
        brand:$("#brandQuadbike").val(),
        model:$("#modelQuadbike").val(),
        category_id:$("#categoryIdQuadbike").val(),
        name:$("#nameQuadbike").val(),

                };
    datosEnvio   = JSON.stringify(quadbike);

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
            type         : 'PUT',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                $("#idQuadbike").val("");
                                $("#brandQuadbike").val("");
                                $("#modelQuadbike").val("");
                                $("#categoryIdQuadbike").val("");
                                $("#nameQuadbike").val("");


                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}

                                        
function consultarId() {

    var codigo =$("#idConsulta").val();

    $.ajax (
                {

                    url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/quadbike/quadbike/' + codigo,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        // $("#idDivConsulta").empty();
                                        // for (i=0; i < json.items.length; i++){
                                        //     $("#idDivConsulta").append(json.items[i].id + json.items[i].brand + " ");
                                        // }

                                        $("#idDivConsulta").empty();
                                        $("#idDivConsulta").append("<table>");
                                        $("#idDivConsulta").append("<caption><h3>Detalle de Quadbike</h3></caption>");
                                        $("#idDivConsulta").append("<tr><th>Codigo </th><th>Marca</th><th>Modelo</th><th>Id Categoria</th><th>Nombre</th><th>Acciones</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].brand + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].model + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].category_id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                            //$("#idDivConsulta").append('<td><button onclick="borrar('+json.items[i].id+')">Borrar</button></td>');
                                            $("#idDivConsulta").append('<td><button onclick="cargar('+json.items[i].id+')">Cargar en Formulario</button></td>');
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");
                                        
                                        console.log(json)
                                    },
                    error       :   function(xhr,status){
                                        console.log(xhr)
                                    },



                }
            );


}


function cargar(idSeleccionado) {

    $.ajax (
               {
                        url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/quadbike/quadbike/' + idSeleccionado,
                        type         : 'GET',
                        dataType     : 'json',

                        // success      :  function(json){
                        //                     $("#idDivConsulta").empty();
                        //                     for (i=0 ; i < json.items.length; i++){
                        //                         $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                        //                     }
                        //                     console.log(json)
                        //                 },

                        success      :  function(json){

                            console.log(json)
                            var item = json.items[0];
                            $("#idQuadbike").val(item.id);
                            $("#brandQuadbike").val(item.brand);
                            $("#modelQuadbike").val(item.model);
                            $("#categoryIdQuadbike").val(item.category_id);
                            $("#nameQuadbike").val(item.name);

                            },


                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}
