<?php // Déclaration des différentes variables utiles à la connexion
$serveur = "172.29.20.218";
$base = 'jeulettre';
 $utilisateur = 'root';
 $motDePasse = '';

// création d'une connexion
try { $dns = "mysql:host=$serveur;dbname=$base";
$conn = new PDO( $dns, $utilisateur, $motDePasse );
}
catch ( Exception $e )
{
    echo "Connexion MySQL impossible : ", $e->getMessage();
    die();
}
?>
