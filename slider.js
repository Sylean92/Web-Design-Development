/* http://imageslidermaker.com/blog/how-to-make-a-responsive-image-slider-using-jquery-and-css */

$(function() {

  var ul = $(".slider ul");
  var ul2 = $(".slider2 ul");
  var ul3 = $(".slider3 ul");
  
  var slide_count = ul.children().length;
  var slide_count2 = ul2.children().length;
  var slide_count3 = ul3.children().length;
  
  var slide_width_pc = 100.0 / slide_count;
  var slide_width_pc2 = 100.0 / slide_count2;
  var slide_width_pc3 = 100.0 / slide_count3;
  
  var slide_index = 0;
  var slide_index2 = 0;
  var slide_index3 = 0;

  ul.find("li").each(function(indx) {
    var left_percent = (slide_width_pc * indx) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count) + "%"});
  });
  
  ul2.find("li").each(function(indx2) {
    var left_percent = (slide_width_pc2 * indx2) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count2) + "%"});
  });
  
  ul3.find("li").each(function(indx3) {
    var left_percent = (slide_width_pc3 * indx3) + "%";
    $(this).css({"left":left_percent});
    $(this).css({width:(100 / slide_count3) + "%"});
  });

  // Listen for click of prev button
  $("#prev").click(function() {
    console.log("prev1 button clicked");
    slide(slide_index - 1);
  });

  // Listen for click of next button
  $("#next").click(function() {
    console.log("next1 button clicked");
    slide(slide_index + 1);
  });
  
  /*
  jQuery("#slider").cycle({
        timeout:0, // no autoplay
        fx: 'fade', //
        next: '#next1',
        prev: '#prev1'
        });
  */
  // Listen for click of prev2 button
  $("#prev1").click(function() {
    console.log("prev2 button clicked");
    slide2(slide_index2 - 1);
  });

  // Listen for click of next2 button
  $("#next1").click(function() {
    console.log("next2 button clicked");
    slide2(slide_index2 + 1);
  });
  
  // Listen for click of prev button
  $("#prev2").click(function() {
    console.log("prev3 button clicked");
    slide3(slide_index3 - 1);
  });

  // Listen for click of next button
  $("#next2").click(function() {
    console.log("next3 button clicked");
    slide3(slide_index3 + 1);
  });

  function slide(new_slide_index) {

    if(new_slide_index < 0 || new_slide_index >= slide_count) return; 

    var margin_left_pc = (new_slide_index * (-100)) + "%";

    ul.animate({"margin-left": margin_left_pc}, 400, function() {

      slide_index = new_slide_index

    });

  }
  
  function slide2(new_slide_index2) {

    if(new_slide_index2 < 0 || new_slide_index2 >= slide_count2) return; 

    var margin_left_pc2 = (new_slide_index2 * (-100)) + "%";

    ul2.animate({"margin-left": margin_left_pc2}, 400, function() {

      slide_index2 = new_slide_index2

    });

  }
  
  function slide3(new_slide_index) {

    if(new_slide_index < 0 || new_slide_index >= slide_count3) return; 

    var margin_left_pc = (new_slide_index * (-100)) + "%";

    ul3.animate({"margin-left": margin_left_pc}, 400, function() {

      slide_index3 = new_slide_index

    });

  }

});

