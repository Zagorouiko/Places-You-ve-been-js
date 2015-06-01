$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedSeason = $("#new-season").val();

    var newLocation = { city: inputtedCity, country: inputtedCountry, season: inputtedSeason
    };

    $("ul#locations").append("<li><span class='location'>" + newLocation.city + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();

      $("show-location h2").text(newLocation.city);
      $(".city").text(newLocation.city);
      $(".country").text(newLocation.country);
      $(".season").text(newLocation.season);
    });

    $("input#new-city").val("");
    $("input#new-country").val("");
    $("#new-season").val("Winter");

  });
});
