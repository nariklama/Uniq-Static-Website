<?php
// require ReCaptcha class
//require('contact/recaptcha-master/src/autoload.php');

// configure
$from = 'Uniq Subscriber List <team@beuniq.com>';
$sendTo = 'amruth.br@gmail.com';
$subject = 'New subscriber for Uniq';
$fields = array('age' => 'Age', 'email' => 'Email'); // array variable name => Text to appear in the email
//$subscriber = $_POST["semail"];
$okMessage = 'Thank you, we will get back to you soon!';
$errorMessage = 'There was an error while submitting your request. Please try again later';
//$recaptchaSecret = 'your_secret_key_here';

// let's do the sending

//echo $subscriber;

try
{
    if (!empty($_POST)) {

        // validate the ReCaptcha, if something is wrong, we throw an Exception, 
        // i.e. code stops executing and goes to catch() block
              
        // everything went well, we can compose the message, as usually
        
        $emailText = "You have a new subscriber for Uniq\n=============================\n";

        foreach ($_POST as $key => $value) {

            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }
        

        $headers = array('Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );

        mail($sendTo, $subject, $emailText, implode("\n", $headers));

        $responseArray = array('type' => 'success', 'message' => $okMessage);
    }
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}

?>