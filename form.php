<?php

    require 'includes/PHPMailer.php';
	require 'includes/SMTP.php';
	require 'includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "tls";
    $mail->Port = "587";
    $mail->Username = "olympia.residence2022@gmail.com";
    $mail->Password = "kbvtkdyawgzxfeyq";
    $mail->Subject = "Съобщение от Olympia Residence";
    $mail->setFrom('olympia.residence2022@gmail.com');
    $mail->isHTML(true);
    $mail->Body = "<h1>Данни на потребителя:<br></h1></br><p>Име: $name<br></p></br><p>Email: $email</p></br><p>Съобщение: $message</p>";
    $mail->addAddress('aleks_1326@abv.bg');
    $mail->CharSet="UTF-8";

	if ( $mail->send() ) {
        header('Location: /OlympiaResidence/contacts.php?isEmailSent=true');
	}else{
        header('Location: /OlympiaResidence/contacts.php?isEmailSent=false');
	}
	$mail->smtpClose();
?>