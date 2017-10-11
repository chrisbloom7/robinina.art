$(function() {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(window).scroll(function(e) {
    var pageX = $(window).scrollLeft() - $(window).width() / 2;
    var pageY = $(window).scrollTop() - $(window).height() / 2;
    var newvalueX = width * pageX * -1 - 25;
    var newvalueY = height * pageY * -1 - 50;
    // console.log(newvalueX, newvalueY);
    $("#background").css({
      backgroundPositionX: newvalueX, backgroundPositionY: newvalueY
    });
  });
});
