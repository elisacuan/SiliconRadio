
// Hover over web work image

 
$('.overlay').hover(function(){
    $(this).css('opacity','.9');
  }, 
  function () {
    $(this).css('opacity','0');  
  });

// Hover over mobile work image

  $('.overlaymobile').hover(function(){
    $(this).css('opacity','.9');
  }, 
  function () {
    $(this).css('opacity','0');  
  });

  $('.overlaymobile2').hover(function(){
    $(this).css('opacity','.9');
  }, 
  function () {
    $(this).css('opacity','0');  
  });

  //scroll reveal

  ScrollReveal().reveal('.skills', { delay: 600 });
  ScrollReveal().reveal('.intro', { delay: 700 });
  ScrollReveal().reveal('.productdesign', { delay: 700 });
  ScrollReveal().reveal('.visualdesign', { delay: 800 });
  ScrollReveal().reveal('.myWork', { delay: 900 });
  ScrollReveal().reveal('.work2', { delay: 1000 });
  ScrollReveal().reveal('.work3', { delay: 1100 });
  ScrollReveal().reveal('.work4', { delay: 1100 });

