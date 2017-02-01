$(document).ready(function() {


  $('.button-m').click(function() {
    $('.content-m, .content-m-a, .content-m-l, .content-m-b').slideToggle('1000');
    $(this).next;
  });
  
  $('.content-m').click(function() {
    $('.inner-content-m').slideToggle('100');
    $(this).next;
  });

  $('.content-m-a').click(function() {
    $('.inner-content-m-a').slideToggle('200');
    $(this).next;
  });

  $('.content-m-l').click(function() {
    $('.inner-content-m-l').slideToggle('200');
    $(this).next;
  });

  $('.button-f').click(function() {
    $('.content-f, .content-f-a, .content-f-l, .content-f-b').slideToggle('200');
    $(this).next;
  });

  $('.content-f').click(function() {
    $('.inner-content-f').slideToggle('200');
    $(this).next;
  });

  $('.content-f-a').click(function() {
    $('.inner-content-f-a').slideToggle('200');
    $(this).next;
  });

});