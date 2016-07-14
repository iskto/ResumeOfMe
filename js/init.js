 jQuery(document).ready(function($) {
 
/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

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
