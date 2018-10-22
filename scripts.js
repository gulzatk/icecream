$(document).ready(function() {

  // $("#button").click(function(event) {
  //   event.preventDefault();
    var flavors = ["chocolate", "strawberry", "vanilla", "bone marrow"]

    flavors.forEach(function(flavor) {

    $(".iceCreamList").append("<li>" + flavor + "</li>");
    // alert(flavor);
  });

  // });


})
