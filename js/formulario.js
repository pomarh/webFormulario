$(document).ready(function() {
    
    $('#btn-send').click(function(){
        
        var  errores = '';

        // VALIDACION DEL NOMBRE------------------------------
        if( $('#names').val() == ''){
            errores += '<p>Escriba un Nombre</p>';
            $('#names').css("border-bottom-color", "#f14b4b")
        }else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // VALIDACION DEL CARREO------------------------------
        if( $('#email').val() == ''){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#f14b4b")
        }else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // VALIDACION DEL MENSAJE------------------------------
        if( $('#mensaje').val() == ''){
            errores += '<p>Escriba un Mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#f14b4b")
        }else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // MENSAJE ERROR-----------------------------
        if( errores == '' == false){
            var mensajeModal = '<div class="model-warp">'+
                                    '<div class="mensaje-modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btn-close">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            $('body').append(mensajeModal);
        }
        // BOTON CERRAR------------------------------
        $('#btn-close').click(function(){
            $('.model-warp').remove();
        });

    });
    
});