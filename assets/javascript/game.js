var random_result;
var lost = 0;
var win = 0;
var before = 0;

var resetAndStart = function() {
  $(".crystals").empty();

  var images = [
    "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjr3f_3nO_gAhXBzIMKHYT1BugQjRx6BAgBEAU&url=https%3A%2F%2Fwww.mineratminerals.com%2Fnorth-america%2Fmexico%2Famethyst-crystals-on-matrix%2C-veracruz%2C-mexico-20-detail&psig=AOvVaw2PRXfO1Qcw6XVz1DbchPQo&ust=1552020303927376",
    "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwia4s-dp-_gAhVp54MKHS6bCv0QjRx6BAgBEAU&url=http%3A%2F%2Fwww.crystalinks.com%2Fgemstones.html&psig=AOvVaw2PRXfO1Qcw6XVz1DbchPQo&ust=1552020303927376",
    "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj9kN2op-_gAhXH5oMKHX-KAdEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fmahinourmostafa%2Fcrystal-drawing%2F&psig=AOvVaw2PRXfO1Qcw6XVz1DbchPQo&ust=1552020303927376",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41CDCmrq53L.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FCrystal-Ball-Prism-Cobalt-Blue%2Fdp%2FB009YK5R0K&docid=L-OagxI7mnQ8LM&tbnid=TXHFSpmbIOowSM%3A&vet=10ahUKEwiM_6-onO_gAhXp1IMKHVYrAI8QMwj6AShcMFw..i&w=500&h=500&bih=646&biw=1263&q=crystal%20&ved=0ahUKEwiM_6-onO_gAhXp1IMKHVYrAI8QMwj6AShcMFw&iact=mrc&uact=8"
  ];

  random_numbers = Math.floor(Math.random() * 101) + 19;
  $("#outcome").html("Random number: " + random_numbers);
  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "data-random": random
    });
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });

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
