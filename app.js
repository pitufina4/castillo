

$( document).ready(function() {


    $("#miboton1,#miboton2").on("click", function () {
        $("#miboton3").removeClass().addClass("btn btn-success");
        $("#miboton3").text("Activado");
        $("#miboton3").on("click", function () {
            $("img").hide();


        });
    });

    $("#miboton2").on("click", function () {
        $("#miboton3").off("click");
                 
    });
    $("#miboton1").on("click", function () {
        $("#miboton3").text("Desactivado"); 
    });   
    
    

    
})


   /* 
    $("img").on("mousedown",function () {
        $(this).height(200);
        
    });

    
    $("img").on("mouseup mousemove", function () {
        $(this).height(350);
    });
*/
 
/*

    $( "button" ).click(function() {
       /* $("#mitexto").text("Has pinchado en el boton");
       $("#mitexto").css("color","red");
    $('Img').height("200px");
    $('img').toggle();

    $('img').fadeOut(1600,function(){

        $("#mitexto").removeClass("miestilo");

        $("#micapa").css(
            {
                "font-size" : "14px",
                "background-color" : "green",
                "color" : "white"
            }
        );
        $("button").removeClass("btn-success").addClass("btn-info");
    });  
    $("#miboton1").mouseover(function() {
        $("#micapa").append ("<p> Este es sel nuevo texto</p>");
    }); 

    $("#miboton2").mouseover(function() {
        $("#micapa > p:last-child").remove() ;

    }); 
    
    $("#miboton3").click(function() {
        console.log ( $("#micapa > p:first-child").text() );
        if($("#micapa > p:first-child").text() == "HOY") {
            $("#micapa > p:first-child").remove();
        }

    }); 

});

*/




