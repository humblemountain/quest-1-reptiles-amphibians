$(document).ready(function() {
  var clickCount = 0;

  $("#waldo").click(function(event){


    console.log(event.offsetX + ', ' + event.offsetY);

    var distance = getDistance(event, target);
    clickCount += 1;

    var getHint = function(distance) {

      switch (true) {
        case distance < 150:
          return({message: "You found the critter!", bg: "#1CC000"});

        default:
          background = 'freezing'
          return({message: "This is not the critter! Try again:)", bg: "#aa3939"});
      }
    }
    var hintText = getHint(distance);
    showHint(hintText);
    var hideMessage = function() {
      $("#spot-critter-message").text("");
      $("#spot-critter-message").css("background", "none");
    }
    var hideHint = setTimeout(hideMessage, 2000);
  })

});

var target = { x:933, y:808 }

//uses the Pythagorean theorem to calculate the distance between two points
var getDistance = function(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

var showHint = function(hint) {
  $("#spot-critter-message").text(hint.message);
  $("#spot-critter-message").css("background", hint.bg);
}
