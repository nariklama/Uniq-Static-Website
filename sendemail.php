<?php
$page = $_SERVER['PHP_SELF'];
  $name = $_REQUEST['Name'] ;
  $email = $_REQUEST['Email'] ;
  $phone = $_REQUEST['Phone'] ;
  $message = $_REQUEST['Message'] ;
  $suggestion = "$name ( $phone ) Says - $message";

 mail( "amruth.br@gmail.com", "User From Amruth.in",$suggestion, "From: $email" );
 //header( "Location: http://www.amruth.in" );
 //echo "<p align='center'><b>Thank you!</b></p>";
?>