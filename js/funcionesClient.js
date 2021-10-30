function consultar() {

    $.ajax (
               {
                        url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/client/client',
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
                            
                            $("#idDivConsulta").append("<caption><h3>Detalle de Clientes</h3></caption>");
                            $("#idDivConsulta").append("<tr><th>Codigo</th><th>Nombre</th><th>Email</th><th>Edad</th><th>Acciones</th></tr>");
                            for (i=0; i < json.items.length; i++){
                                $("#idDivConsulta").append("<tr>");
                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].email + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].age + "</td>");
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
    var cliente;

    cliente = {
        id: $("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
        
        };

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'POST',
            data         :  cliente,

            success      :  function(response){
                               console.log(response);
                               $("#idCliente").val("");
                               $("#nameCliente").val("");
                               $("#emailCliente").val("");
                               $("#ageCliente").val("");
                               
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );



}


function borrar() {

    var cliente,datosEnvio;

    cliente      = {id: $("#idCliente").val()};
    datosEnvio   = JSON.stringify(cliente);

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                $("#idCliente").val("");
                                $("#nameCliente").val("");
                                $("#emailCliente").val("");
                                $("#ageCliente").val("");

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}


function actualizar() {

    var cliente,datosEnvio;

    cliente = {
        id: $("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#emailCliente").val(),
        age:$("#ageCliente").val(),
        
                };
    datosEnvio   = JSON.stringify(cliente);

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'PUT',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                $("#idCliente").val("");
                                $("#nameCliente").val("");
                                $("#emailCliente").val("");
                                $("#ageCliente").val("");
                                
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

                    url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/client/client/' + codigo ,
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
                                        $("#idDivConsulta").append("<tr><th>Codigo</th><th>Nombre</th><th>Email</th><th>Edad</th><th>Acciones</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].name + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].email + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].age + "</td>");
                                            //$("#idDivConsulta").append('<td><button onclick="borrar('+json.items[i].id+')">Borrar</button></td>');
                                            $("#idDivConsulta").append('<td><button onclick="cargar('+json.items[i].id+')">Cargar en Formulario</button></td>');
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");
                                        
                                        console.log(json)
                                        $("#idCliente").val("");
                                        $("#nameCliente").val("");
                                        $("#emailCliente").val("");
                                        $("#ageCliente").val("");
                                        $("#idConsulta").val("");
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
                        url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/client/client/' + idSeleccionado,
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
                            $("#idCliente").val(item.id);
                            $("#nameCliente").val(item.name);
                            $("#emailCliente").val(item.email);
                            $("#ageCliente").val(item.age);
                            
                            },


                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}
