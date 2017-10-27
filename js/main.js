var compteur =1;
(function(){

    var voy= function(){

        var lesvoy=["a","e","i","o","u","y",];
        var rdm =Math.floor(Math.random() * 6);
        var voyalea =lesvoy[rdm];
        return voyalea;
    }
    $("#buttonvoyelle").click(function(){
        var voyelle=voy();
        console.log(compteur);
        $("#l"+compteur).html(voyelle);
        compteur++;
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
        console.log(compteur);
        $("#l"+compteur).html(consonne);
        compteur++;
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
