$(document).ready(function(){

   $('.carousel').carousel({
     fullWidth: false
   });

   $("#b1").on('click', function() {
     location = "HowTo1.html";
   });

   $("#b2").on('click', function() {
     location = "HowTo2.html";
   });

   $("#b3").on('click', function() {
     location = "HowTo3.html";
   });

   setInterval(function() {
     $('.carousel').carousel('next');
   }, 3000);
});
