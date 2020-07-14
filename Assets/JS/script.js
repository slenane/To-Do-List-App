//Contents
//1. Check off specific Todos when clicked
//2. Click on X to delete the ToDo
//3. Creating ToDos
//4. Toggle input

//CLEANED UP CODE

//.......................................................................

//1. Check off specific Todos when clicked

//Check off specific ToDos by clicking through JS
/*
$("li").on("click", function() {
    //If li is gray
    if($(this).css("color") === "rgb(128, 128, 128)") {
        //Turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    } else {
        //Turn it gray
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }
}); */

//This can be done more easily through a CSS class
$("ul").on("click", "li", function() { //(1)
    $(this).toggleClass("completed");
});

//(1) We can only add listeners on events when this code is run for the 
//    first time. If we set the listener on the $("li") it would only run
//    on the original items in our list and not on the ones added later.
//    by setting $("ul") .... "li" we add the listener on the ul which is
//    not changed through out the app, we are not adding more uls, we are
//    adding a listener for a ul and toggling the class when an li is 
//    clicked inside a ul.
//    So we are really only listening when an li is clicked.

//.......................................................................

//2. Click on X to delete the ToDo

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    }); //(2)
    event.stopPropagation(); //(3)
});

//(2) .parent().remove() will remove the element we are clicking and it's
//    parent. In this example the span and the li will be removed after the
//    fadeOut is completed because it is within a function. It's important
//    to note that the $(this) within the fadeOut function is not the same
//    as the one in which the fadeOut function is operating. The parent has
//    already been selected, so the $(this) is referring to the li.
//(3) By adding the function input 'event' and the event.stopPropagation() 
//    method to our code we can ensure that when we click on the span that 
//    it only does what is outlined in our function and then stops. In 
//    this example, when you click the span it will delete the entry but
//    not cross it out like it would because our span is inside an li.

//.......................................................................

//3. Creating ToDos

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        let todoText = $(this).val(); //(4)
        $(this).val(""); //(5)
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); //(6)
    }
});

//(4) This grabs the text value using val() from the input field and sets 
//    the variable to match that text
//(5) Sets a new val() value to equal an empty string
//(6) The append() will add a string of HTML to the end of an element. In 
//    this case we are adding a new li to the end of the ul, therefore 
//    adding another entry to our toDo list. Adding the span to the appended 
//    string allows us to add our functionality to the new li.

//.......................................................................

//4. Toggle input

$("input[type='text']").css("display", "none"); //(7)

$("#plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});

//(7) Set the display to be none to begin with, could even change the plus
//    icon to become a minus when it is shown.

//########################################################################

/////////////////////////// CLEANED UP CODE //////////////////////////////

//########################################################################

/*
$("ul").on("click", "li", function() { 
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    }); 
    event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        let todoText = $(this).val(); 
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText + "</li>"); //(6)
    }
});
*/