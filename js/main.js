var compteur =0;
(function(){

    var voy= function(){

        var lesvoy=["a","e","i","o","u","y",];
        var rdm =Math.floor(Math.random() * 6);
        var voyalea =lesvoy[rdm];
        return voyalea;
    }
    $("#buttonvoyelle").click(function(){
        var voyelle=voy();
        compteur++;
        /*console.log(compteur);*/
        $("#l"+compteur).html(voyelle);
        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": voyelle}
        })
            .done(function(e) {
                console.log("data " + e );
            });
        if(compteur>9) {
            alert('Complet');
            document.getElementById("buttonvoyelle").setAttribute("disabled","disabled");
            document.getElementById("buttonconsonne").setAttribute("disabled","disabled");
        }
    })


    var cons= function(){
        var lescons=["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
        var rdml =Math.floor(Math.random() * 20);
        var conselea =lescons[rdml];
        return conselea;
    }
    $("#buttonconsonne").click(function(){
        var consonne=cons();
        compteur++;
        /*console.log(compteur);*/
        $("#l"+compteur).html(consonne);
        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": consonne}
        })
            .done(function(e) {
                console.log("data " + e );
            });
        if(compteur>9) {
            alert('Complet');
            document.getElementById("buttonvoyelle").setAttribute("disabled","disabled");
            document.getElementById("buttonconsonne").setAttribute("disabled","disabled");
        }
    })

    $("#buttonrecommencer").click(function(){
        window.location.reload();
        $(button).css("background-color","red");
    })


    $(".lettre").click(function(){
     alert('coco')

    })

})();
