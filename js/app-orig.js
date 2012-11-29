// Start the application when the dom ready event has fired 

$(document).ready(function () {
  /**
 
  1. Add an event listener for the button 

  2. render a form inside the .header from that event.
     wrap the form with in an .add-cweep-form div to get
     the styles.

     The form should have an <input class='message'/>
     and a <a class='button'>Post'</a>

  3. Add a 'cweep' to the list when the form is submitted

  4. Remove the form
   
  **/

   $('.add-cweep').on('click', function (ev){

    $('header').append("<div class='add-cweep-form'><form><input class='message' type='text'><a class='button'>Post</a></form></div>");

    

    $('.button').on('click', function (){

      var formData = $('.message').val();
      $('.cweep-list').append("<li><div class='avatar' style='background: url(img/ed.jpg); background-size: 50px 50px;'></div><div class='message'>"+formData+"</div></li>");
      $('add-cweep-form').remove();
    });




   });




});
