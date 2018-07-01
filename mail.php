<!-- <?php 
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $company = $_POST['company'];
  $email = $_POST['email'];
  $message = $_POST['msg-area'];

  $recipient = 'k_ramanauskas@yahoo.de';
  $mail_header = 'From: $email \r\n';
  $form_content = "$mail_header\n $first_name, $last_name\n Message: $message";
 ?> -->


 <?php

		if($_POST["submit"]){
			if(!$_POST["name"]){
				$name = "<li> Enter your name </li>";
			}

			if(!$_POST["email"]){
				$email = "<li> Enter your email </li>";
			}

			if($_POST['email']!= "" AND !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
				$email = "<li> Enter a valid email address</li>";

			}
			if(!$_POST["message"]){
				$message = "<li>Enter your message</li>";
			}

			if($_POST["message"] AND filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) AND $_POST["name"]){
				if(mail($to="eric.orellana92@gmail.com", 
						$subject="You got a new message from ".$_POST["name"],
						$message="Following message:".$_POST["message"],
						$headers=$_POST["email"]
					)){
					$result = "<div class='alert alert-success'><strong>You have completed the form successfully!</strong></div>";
				}else{
					$result = "Sorry there was an error when submitting your form, please try again later.";
				}

			}else{
				$result="<div class='alert alert-danger'><strong>Please complete the following fields:</strong> <ul id='resultsMissingFields'> $message $email $name </ul></div>";
			}
		}

	?>