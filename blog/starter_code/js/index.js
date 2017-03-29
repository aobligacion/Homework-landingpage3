$( document ).ready(function() {
  $("#first-readmore").click(function(event){
    event.preventDefault();
    console.log ($('#first-readmore').val());


    $("#first-text").slideDown("slow", function(){
      $('#first-readmore').css({
        'display' : 'none'
      });
      $('#hide-text1').css({
        'display' : 'block'
      });


    });


    });
 $("#hide-text1").click(function(event){
    event.preventDefault();
    $("#first-text").slideUp("slow", function(){
    $("#first-text").hide();

    $('#first-readmore').css({
      'display' : 'block'
    });
    $('#hide-text1').css({
      'display' : 'none'
    });

  });

});

$("#second-readmore").click(function(event){
  event.preventDefault();
  console.log ($('#second-readmore').val());


  $("#second-text").slideDown("slow", function(){
    $('#second-readmore').css({
      'display' : 'none'
    });
    $('#hide-text2').css({
      'display' : 'block'
    });


  });


  });
$("#hide-text2").click(function(event){
  event.preventDefault();
  $("#second-text").slideUp("slow", function(){
  $("#second-text").hide();

  $('#second-readmore').css({
    'display' : 'block'
  });
  $('#hide-text2').css({
    'display' : 'none'

});
});
});

//$('#button-footer').click(function(event){
  //event.preventDefault();
//});

});
