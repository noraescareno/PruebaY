$(function(){

    $('#b_datos').click(function(){
        alert('Por el momento no tenemos nada');
    });

    $('#b_lista').click(function(){
        $('#div_botones').css('display','none');
        $('#div_lista').css('display','block');

        var lista="";
            alert('entra');  

        $.getJSON("http://denken.com.mx/wow/php/buscar_reportes.php",function(data){
            alert('datos: '+JSON.stringify(data));
            
            $.each(data, function(i, field)
            {
                lista+="<li id='lista_li'>"+field.nombre_reporte+"</li>";
            });

            $("#lista").append(lista); 
        });

        
    });

    
});