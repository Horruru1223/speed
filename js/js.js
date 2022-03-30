$(document).ready(function() {
  $('logo').click(function(){
      $('.mainscreen').addClass("visible")
      $('.section4').addClass("none")
      $('.section5').addClass("none")
      $('.section6').addClass("none")
      $('.section7').addСlass("none")
      $(".texttimeline").addClass("none");
      $(".timeline").addClass("none");
   });
  });

$(document).ready(function(){
    $(".mainArrow").click(function(){
        $(".maintextone").removeClass("visible");
        $(".maintexttwo").removeClass("visible");
        $(".mainArrow").removeClass("visible");
        $(".video-main").removeClass("visible");
        $(".timeline").removeClass("none");
        $(".texttimeline").removeClass("none");
    });
});

$(document).ready(function() {
  $('.rectangle1').click(function(){
      $('.section4').removeClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section5').addClass("none")
      $('.section6').addClass("none")
      $('.section7').addСlass("none")
      $(".texttimeline").addClass("none");
  });
});

$(document).ready(function() {
   $('.rectangle2').click(function(){
      $('.section5').removeClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section4').addClass("none")
      $('.section6').addClass("none")
      $('.section7').addClass("none")
      $(".texttimeline").addClass("none");
  });
});

$(document).ready(function() {
  $('.rectangle3').click(function(){
      $('.section6').removeClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section5').addClass("none")
      $('.section4').addClass("none")
      $('.section7').addClass("none")
      $(".texttimeline").addClass("none");
  });
});

$(document).ready(function() {
  $('.rectangle4').click(function(){
      $('.section7').removeClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section5').addClass("none")
      $('.section6').addClass("none")
      $('.section4').addClass("none")
      $(".texttimeline").addClass("none");
  });
});

$(document).ready(function() {
  $('.umbrella').click(function(){
    $('.video-bg').css("display", "block");
    $('.umbrella').css("filter", "grayscale(0%)");
    $('.sea').css("display", "none");
    $(".ticket").css("filter", "grayscale(100%)");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.ticket').click(function(){
    $('.sea').css("display", "block");
    $(".ticket").css("filter", "grayscale(0%)");
    $('.video-bg').css("display", "none");
    $('.umbrella').css("filter", "grayscale(100%)");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.sausage').click(function(){
    $('.school').css("display", "block");
    $(".sausage").css("filter", "grayscale(0%)");
    $(".texttimelinetwo").addClass("none");
    $('.two').css("filter", "grayscale(100%)");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.watermelon').click(function(){
    $('.video-lake').css("display", "block");
    $(".watermelon").css("filter", "grayscale(0%)");
    $('.dacha').css("display", "none");
    $('.pancakes').css("filter", "grayscale(100%)");
    $(".sketch").css("filter", "grayscale(100%)");
    $('.fire1').css("display", "none");
    $('.fire2').css("display", "none");
    $('.fire3').css("display", "none");
    $('.fire4').css("display", "none");
    $('.fire5').css("display", "none");
    $('.fire6').css("display", "none");
    $('.candle1').css("display", "none");
    $('.candle2').css("display", "none");
    $('.candle3').css("display", "none");
    $('.candle4').css("display", "none");
    $('.candle5').css("display", "none");
    $('.candle6').css("display", "none");
    $(".sketch").css("filter", "grayscale(100%)");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.pancakes').click(function(){
    $('.dacha').css("display", "block");
    $('.pancakes').css("filter", "grayscale(0%)");
    $('.video-lake').css("display", "none");
    $(".sketch").css("filter", "grayscale(100%)");
    $('.watermelon').css("filter", "grayscale(100%)");
    $('.fire1').css("display", "");
    $('.fire2').css("display", "none");
    $('.fire3').css("display", "none");
    $('.fire4').css("display", "none");
    $('.fire5').css("display", "none");
    $('.fire6').css("display", "none");
    $('.candle1').css("display", "none");
    $('.candle2').css("display", "none");
    $('.candle3').css("display", "none");
    $('.candle4').css("display", "none");
    $('.candle5').css("display", "none");
    $('.candle6').css("display", "none");
    $(".sketch").css("filter", "grayscale(100%)");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.ladybug').click(function(){
    $('.flower1').css("display", "block");
    $('.flower2').css("display", "block");
    $('.flower3').css("display", "block");
    $('.ladybug').css("filter", "grayscale(0%)");
    $('.window').css("display", "none");
    $('.tights').css("filter", "grayscale(100%)");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.tights').click(function(){
    $('.window').css("display", "block");
    $('.textTightsNumber').css("display", "block");
    $('.textTightsmonth').css("display", "block");
    $('.textTights').css("display", "block");
    $('.tights').css("filter", "grayscale(0%)");
    $('.kitty').css("filter", "grayscale(100%)");
    $('.flower1').css("display", "none");
    $('.flower2').css("display", "none");
    $('.flower3').css("display", "none");
    $('.ladybug').css("filter", "grayscale(100%)");
    $('.textKittyNumber').css("display", "none");
    $('.textKittymonth').css("display", "none");
    $('.textKitty').css("display", "none");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});

$(document).ready(function() {
  $('.kitty').click(function(){
    $('.textKittyNumber').css("display", "block");
    $('.textKittymonth').css("display", "block");
    $('.textKitty').css("display", "block");
    $('.kitty').css("filter", "grayscale(0%)");
    $('.flower1').css("display", "none");
    $('.flower2').css("display", "none");
    $('.flower3').css("display", "none");
    $('.ladybug').css("filter", "grayscale(100%)");
    $('.window').css("display", "none");
    $('.tights').css("filter", "grayscale(100%)");
    $(".texttimeline").addClass("none");
    $('.textTightsNumber').css("display", "none");
    $('.textTightsmonth').css("display", "none");
    $('.textTights').css("display", "none");
    $(".texttimelinetwo").addClass("none");

  });
});

$(document).ready(function() {
  $('.sketch').click(function(){
    $('.fire1').css("display", "block");
    $('.fire2').css("display", "block");
    $('.fire3').css("display", "block");
    $('.fire4').css("display", "block");
    $('.fire5').css("display", "block");
    $('.fire6').css("display", "block");
    $('.candle1').css("display", "block");
    $('.candle2').css("display", "block");
    $('.candle3').css("display", "block");
    $('.candle4').css("display", "block");
    $('.candle5').css("display", "block");
    $('.candle6').css("display", "block");
    $(".sketch").css("filter", "grayscale(0%)");
    $('.dacha').css("display", "none");
    $('.pancakes').css("filter", "grayscale(100%)");
    $(".watermelon").css("filter", "grayscale(100%)");
    $('.video-lake').css("display", "none");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");

  });
});
