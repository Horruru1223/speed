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
        $(".hse").css("display", "none");
        $(".timeline").removeClass("none");
        $(".texttimeline").removeClass("none");
    });
});

$(document).ready(function() {
  $('.rectangle1').click(function(){
      $('.section4').toggleClass("none");
      $('.texttimeline').addClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section5').addClass("none")
      $('.section6').addClass("none")
      // $('.section7').addСlass ("none")

  });
});

$(document).ready(function() {
   $('.rectangle2').click(function(){
      $('.section5').toggleClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section4').addClass("none")
      $('.section6').addClass("none")
      $('.section7').addClass("none")
      $(".texttimeline").addClass("none");
  });
});

$(document).ready(function() {
  $('.rectangle3').click(function(){
      $('.section6').toggleClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section5').addClass("none")
      $('.section4').addClass("none")
      $('.section7').addClass("none")
      $(".texttimeline").addClass("none");
  });
});

$(document).ready(function() {
  $('.rectangle4').click(function(){
      $('.section7').toggleClass("none")
      $('.texttimelinetwo').removeClass("none")
      $('.section4').addClass("none")
      $('.section5').addClass("none")
      $('.section6').addClass("none")
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
  $('.two').click(function(){
    $('.textTwoNumber').css("display", "block");
    $('.textTwomonth').css("display", "block");
    $('.textTwo').css("display", "block");
    $(".two").css("filter", "grayscale(0%)");
    $('.school').css("display", "none");
    $(".texttimelinetwo").addClass("none");
    $('.sausage').css("filter", "grayscale(100%)");
    $(".texttimeline").addClass("none");
    $('.textSausageNumber').css("display", "none");
    $('.textSausagemonth').css("display", "none");
    $('.textSausage').css("display", "none");

  });
});

$(document).ready(function() {
  $('.sausage').click(function(){
    $('.school').css("display", "block");
    $(".sausage").css("filter", "grayscale(0%)");
    $(".texttimelinetwo").addClass("none");
    $('.two').css("filter", "grayscale(100%)");
    $(".texttimeline").addClass("none");
    $('.textSausageNumber').css("display", "block");
    $('.textSausagemonth').css("display", "block");
    $('.textSausage').css("display", "block");
    $('.textTwoNumber').css("display", "none");
    $('.textTwomonth').css("display", "none");
    $('.textTwo').css("display", "none");
  });
});

$(document).ready(function() {
  $('.watermelon').click(function(){
    $('.lake').removeClass("none");
    $(".watermelon").css("filter", "grayscale(0%)");
    $('.dacha').css("display", "none");
    $('.textWatermelonNumber').css("display", "block");
    $('.textWatermelonmonth').css("display", "block");
    $('.textWatermelon').css("display", "block");
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
    $('.textsketchNumber').css("display", "none");
    $('.textsketchmonth').css("display", "none");
    $('.textsketch').css("display", "none");
    $('.textPancake').css("display", "none");
    $('.textPancakesNumber').css("display", "none");
    $('.textPancakesmonth').css("display", "none");
  });
});

$(document).ready(function() {
  $('.pancakes').click(function(){
    $('.dacha').css("display", "block");
    $('.pancakes').css("filter", "grayscale(0%)");
    $('.lake').addClass("none");
    $(".sketch").css("filter", "grayscale(100%)");
    $('.watermelon').css("filter", "grayscale(100%)");
    $('.textPancake').css("display", "block");
    $('.textPancakesNumber').css("display", "block");
    $('.textPancakesmonth').css("display", "block");
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
    $('.textWatermelonNumber').css("display", "none");
    $('.textWatermelonmonth').css("display", "none");
    $('.textWatermelon').css("display", "none");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");
    $('.textsketchNumber').css("display", "none");
    $('.textsketchmonth').css("display", "none");
    $('.textsketch').css("display", "none");


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
    $('.textLadybugNumber').css("display", "block");
    $('.textLadybugmonth').css("display", "block");
    $('.textLadybug').css("display", "block");
    $('.textKittyNumber').css("display", "none");
    $('.textKittymonth').css("display", "none");
    $('.textKitty').css("display", "none");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");
    $('.textTightsNumber').css("display", "none");
    $('.textTightsmonth').css("display", "none");
    $('.textTights').css("display", "none");

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
    $('.textLadybugNumber').css("display", "none");
    $('.textLadybugmonth').css("display", "none");
    $('.textLadybug').css("display", "none");
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
    $('.textLadybugNumber').css("display", "none");
    $('.textLadybugmonth').css("display", "none");
    $('.textLadybug').css("display", "none");
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
    $('.textsketchNumber').css("display", "block");
    $('.textsketchmonth').css("display", "block");
    $('.textsketch').css("display", "block");
    $(".sketch").css("filter", "grayscale(0%)");
    $('.dacha').css("display", "none");
    $('.pancakes').css("filter", "grayscale(100%)");
    $(".watermelon").css("filter", "grayscale(100%)");
    $('.lake').addClass("none");
    $('.textWatermelonNumber').css("display", "none");
    $('.textWatermelonmonth').css("display", "none");
    $('.textWatermelon').css("display", "none");
    $(".texttimelinetwo").addClass("none");
    $(".texttimeline").addClass("none");
    $('.textPancake').css("display", "none");
    $('.textPancakesNumber').css("display", "none");
    $('.textPancakesmonth').css("display", "none");
  });
});
