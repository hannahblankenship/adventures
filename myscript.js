$(document).ready(function(){

  var communication = $('#ssc').css('background-color','magenta');
  
  /* WD AM Experiences*/
  /* EX 1 */
  $('.ex1').hover(function(){
    communication;
    $('#swm').css('background-color','magenta');
    $('#sws').css('background-color','magenta');
  },
  function(){
    $('#ssc').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
    $('#sws').css('background-color','transparent');
  });
  
  /* EX 2 */
  $('.ex2').hover(function(){
    $('#ssc').css('background-color','magenta');
    $('#ssl').css('background-color','magenta');
    $('#sspm').css('background-color','magenta');
    $('#swm').css('background-color','magenta');
    $('#sws').css('background-color','magenta');
  },
  function(){
    $('#ssc').css('background-color','transparent');
    $('#ssl').css('background-color','transparent');
    $('#sspm').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
    $('#sws').css('background-color','transparent');
  });
  
    /* EX 3 */
  $('.ex3').hover(function(){
    $('#ssl').css('background-color','magenta');
    $('#ssp').css('background-color','magenta');
    $('#swm').css('background-color','magenta');
      },
  function(){
    $('#ssl').css('background-color','transparent');
    $('#ssp').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
  });
  
      /* EX 4 */
  $('.ex4').hover(function(){
    $('#ssl').css('background-color','magenta');
    $('#ssp').css('background-color','magenta');
    $('#swm').css('background-color','magenta');
      },
  function(){
    $('#ssl').css('background-color','transparent');
    $('#ssp').css('background-color','transparent');
    $('#swm').css('background-color','transparent');
  });
  
});
