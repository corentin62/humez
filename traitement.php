<?php
include('connexion.php');

if(!empty($_GET['lettre'])) {
    $lettre = $_GET['lettre'];
    $req =$conn->prepare('UPDATE lettre SET nbutilisation= nbutilisation + 1 WHERE nomlettre=:lettre');
        try {
            $donnees = array(
                'lettre'=>$lettre
            );
            $success = $req->execute($donnees);
        }
        catch(Exception $e){
            echo'erreur requeste :' , $e->getMessage();
        }
}
?>

