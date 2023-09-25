
// A $( document ).ready() block.
$( document ).ready(function() {
   
    $(".hamburger-button").click(function(){
  
        $(".mobile-meny").slideToggle();
        $(this).toggleClass("active");
        
      });   

// animate on scroll activate
      AOS.init();


});