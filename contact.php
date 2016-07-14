<?php
$field_name = $_POST['your-name'];
$field_email = $_POST['email'];
$subject = $_POST['your-subject'];
$field_message = $_POST['message'];

$mail_to = 'a22377964@gmail.com';

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { 
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. I will contact you shortly.');
		window.location = 'index.html';
	</script>

}
else { 
	<script language="javascript" type="text/javascript">
		alert('Message failed.');
		window.location = 'index.html';
	</script>

}
?>
