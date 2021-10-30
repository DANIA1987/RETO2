function consultar() {

    $.ajax (
               {
                        url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/message/message',
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
                            
                            $("#idDivConsulta").append("<caption><h3>Lista de Mensajes</h3></caption>");
                            $("#idDivConsulta").append("<tr><th>Id</th><th>Mensaje</th><th>Acciones</th></tr>");
                            for (i=0; i < json.items.length; i++){
                                $("#idDivConsulta").append("<tr>");
                                $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                $("#idDivConsulta").append("<td>" + json.items[i].messagetext + "</td>");
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
    var mensaje;

    mensaje = {
        id: $("#idMensaje").val(),
        messagetext:$("#idTexto").val(),
        };

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'POST',
            data         :  mensaje,

            success      :  function(response){
                               console.log(response);
                               $("#idMensaje").val("");
                               $("#idTexto").val("");
                               
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );



}


function borrar() {

    var mensaje,datosEnvio;

    mensaje      = {id: $("#idMensaje").val()};
    datosEnvio   = JSON.stringify(mensaje);

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                $("#idMensaje").val("");
                                $("#idTexto").val("");
                                $("#idConsulta").val("");

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}


function actualizar() {

    var mensaje,datosEnvio;

    mensaje = {
        id: $("#idMensaje").val(),
        messagetext:$("#idTexto").val(),
        };
    datosEnvio   = JSON.stringify(mensaje);

    $.ajax (
        {

            url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'PUT',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);
                                $("#idMensaje").val("");
                                $("#idTexto").val("");
                                $("#isConsulta").val("");
                                
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

                    url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/message/message/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',

                    success      :  function(json){
                                        // $("#idDivConsulta").empty();
                                        // for (i=0; i < json.items.length; i++){
                                        //     $("#idDivConsulta").append(json.items[i].id + json.items[i].brand + " ");
                                        // }

                                        $("#idDivConsulta").empty();
                                        $("#idDivConsulta").append("<table>");
                                        $("#idDivConsulta").append("<caption><h3>Lista de Mensajes</h3></caption>");
                                        $("#idDivConsulta").append("<tr><th>Id</th><th>Mensaje</th><th>Acciones</th></tr>");
                                        for (i=0; i < json.items.length; i++){
                                            $("#idDivConsulta").append("<tr>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].id + "</td>");
                                            $("#idDivConsulta").append("<td>" + json.items[i].messagetext + "</td>");
                                            $("#idDivConsulta").append('<td><button onclick="cargar('+json.items[i].id+')">Cargar en Formulario</button></td>');
                                            $("#idDivConsulta").append("</tr>");
                                        }
                                        $("#idDivConsulta").append("</table>");
                                        
                                        console.log(json)
                                        $("#idMensaje").val("");
                                        $("#idTexto").val("");
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
                        url          : 'https://g0101ebdb778ad2-daniaretos.adb.uk-cardiff-1.oraclecloudapps.com/ords/admin/message/message/' + idSeleccionado,
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
                            $("#idMensaje").val(item.id);
                            $("#idTexto").val(item.messagetext);
                            
                            },


                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}
