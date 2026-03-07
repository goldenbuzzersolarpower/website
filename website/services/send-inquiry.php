<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $ticket = "GBSP" . date("Ymd") . "-" . rand(1000, 9999);
    $to = "goldenbuzzer.solarpowerph@gmail.com";
    $subject = "Customer Inquiry - $ticket";

    $body = "
Good day,

You have received a new service inquiry from your website.

--------------------------------------------------
INQUIRY DETAILS
--------------------------------------------------

Name: $name
Email Address: $email
Phone / Mobile Number: $phone
Service Interested In: $service
Ticket Number: $ticket

Message:
$message

--------------------------------------------------

Please respond to this inquiry at your earliest convenience.

This message was automatically generated from your website inquiry form.

Thank you.

Best regards,
Website Inquiry System
";
    $headers = "From: customerservice@goldenbuzzer-solarpower.com.ph\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Inquiry sent successfully!";
    } else {
        echo "Failed to send inquiry.";
    }

}
?>