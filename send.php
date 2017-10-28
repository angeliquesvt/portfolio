<?php

/*
 * Test si je reçois des POST
 */

if (isset($_REQUEST)) {
    /**
     * Récuparation de variables
     */
    $nom = $_REQUEST['nom'];
    $prenom = $_REQUEST['prenom'];
    $email = $_REQUEST['email'];
    $textarea = $_REQUEST['message'];
    $sender = 'contact@angeliquesouvant.fr';
    /**
     * Appel à la librairie permettant d'envoyer des mails
     */
    require_once realpath('swiftmailer/lib/swift_required.php');
    /**
     * Configure l'envoie de mail
     *  1 - SMTP
     *  2 - Port (587 => tls / 465 => ssl)
     *  3 - Type (tls / ssl)
     *  4 - Identifiant + mot de passe
     */
    $transport = Swift_SmtpTransport::newInstance('SSL0.OVH.NET', 587, 'tls')
            ->setUsername($sender)
            ->setPassword('contact123555');
    /*
     * Création de ton mail
     */
    $message = Swift_Message::newInstance()
            ->setSubject("Mon sujet")
            ->setFrom(array($sender))
            ->setTo(array("angelique.souvant@gmail.com"))
            ->setBody("Nom: {$nom} <br/>Prénom: {$prenom}<br/>Mail: {$email} <br/><br/>Message:<br/><br/>{$textarea}", 'text/html');
    /**
     * Envoi de ton email
     */
    Swift_Mailer::newInstance($transport)->send($message);
    echo true;
}