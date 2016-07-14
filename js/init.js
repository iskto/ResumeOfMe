 jQuery(document).ready(function($) {
 
/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contact-form button.submit').click(function() {

      var contactName = $('#contact-form #contactName').val();
      var contactEmail = $('#contact-form #contactEmail').val();
      var contactSubject = $('#contact-form #contactSubject').val();
      var contactMessage = $('#contact-form #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "contact.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
        
            }
            // There was an error
            else {
        
            }

	      }

      });
      return false;
   });


});
