$(document).ready(function () {
  console.log("Document is ready.");

  var searchTerm;

  function apiCall() {
    console.log("You called the api!");
    setTimeout(function () {
      $("#display").empty();
      $("#search-term").val("");
      $("#display").append(
        $("<h1>This is my returned data: " + searchTerm + "</h1>")
      );
      $("#search-button").attr("disabled", false);
    }, 3000);
  }

  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    // alert("You submitted the form!");

    // INPUT VALIDATION
    searchTerm = $("#search-term").val();
    if (searchTerm && searchTerm.length > 2) {
      $("#search-button").attr("disabled", true);
      apiCall();
    } else {
      alert("Please enter a valid search term.");
    }
  });
});
