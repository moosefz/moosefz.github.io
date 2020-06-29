//Checking off completed list items
//start with parent and add "li" after "click" to apply to new elements after load
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Removing a todo
//parent() allows you to access the parent element as well.
//for example, span and parent() which is li both get removed.
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation(); //stops the event bubbling so it ONLY activates this function
});

//Adding todos
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
      var todoText = $(this).val() //grabs the new todo text from input
      $(this).val(""); //clear input
      //create new li and add to ul
      $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

//Add item to list slider
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
