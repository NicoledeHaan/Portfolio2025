<?php
$to = "nicoledehaan3@gmail.com";
$subject = "Test Email";
$body = "This is a test email.";
$headers = "From: no-reply@example.com";

if(mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Error sending email.";
}
?>
