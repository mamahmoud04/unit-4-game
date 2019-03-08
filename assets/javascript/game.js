var random_result;
var lost = 0;
var win = 0;
var before = 0;

var resetAndStart = function() {
  $(".crystals").empty();

  var images = [
    "./assets/images/image1.jpg",
    "./assets/images/2-Star_Crystal.png",
    "./assets/images/image3.jpg",
    "./assets/images/image4.png"
  ];

  random_numbers = Math.floor(Math.random() * 101) + 19;
  $("#outcome").html("Random number: " + random_numbers);
  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<img>");
    crystal.attr({
      class: "crystal",
      "data-random": random
    });

    crystal.attr("src", images[i]);

    $(".crystals").append(crystal);
  }
  $("#previous").html("Total Score: " + before);
};
resetAndStart();

$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));
  before += num;
  $("#previous").html("Total Score: " + before);
  //   console.log(previous);

  if (before > random_numbers) {
    lost++;
    $("#lost").html("Your a loser: " + lost);
    before = 0;

    resetAndStart();
  } else if (before === random_numbers) {
    win++;
    $("#win").html("Your a winner: " + win);

    before = 0;
    resetAStart();
  }
});
