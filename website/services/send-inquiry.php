<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "goldenbuzzer.solarpowerph@gmail.com";
    $subject = "New Solar Inquiry";

    $body = "
New Inquiry Details

Name: $name
Email: $email
Phone: $phone
Service: $service

Message:
$message
";
    $headers = "From: goldenbuzzer-solarpower.com.ph\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Cc: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Inquiry sent successfully!";
    } else {
        echo "Failed to send inquiry.";
    }

}
?>