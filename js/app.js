// Start the application when the dom ready event has fired 

$(document).ready(function () {
  var entrySource   = $("#entry-form").html();
  var entryTemplate = Handlebars.compile(entrySource);

  

  var cweepSource   = $("#add-cweep-line").html();
  var cweepTemplate = Handlebars.compile(cweepSource);
  



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
     var entryContext = {ButtonText: "Post" };
     var entryHtml    = entryTemplate(entryContext);
    $('header').append(entryHtml);

    

    $('.button').on('click', function (){

      var formData = $('.message').val();
      var cweepContext = {formData: formData };
      var cweepHtml    = cweepTemplate(cweepContext);
      $('.cweep-list').append(cweepHtml);
      $('.add-cweep-form').remove();
    });




   });




});
