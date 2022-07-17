<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$Subject = $_POST["subject"];
$tel = $_POST["tel"];

$EmailTo = "info@trainme.club";
 
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Tel: ";
$Body .= $tel;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$headers = array(
    'From' => 'trairnwu@trainme.club',
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion()
);


$success = mail($EmailTo, $Subject, $Body, $headers);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>