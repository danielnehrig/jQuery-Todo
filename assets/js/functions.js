$( document ).ready(function() {

$(document).on('click', '.remove', function() {
  $(this).parent().slideUp();
});

$(document).on('click', '.completed', function() {
   $(this).parent().toggleClass("complete");
   $(this).toggleClass("hov");
});

// $( "ul" ).sortable();

// Pressing enter
$(document).keypress(function(e) {
    var str = $( "#todo-text-inp" ).val();
  
    if(e.which == 13 && str != "" && str != null ) {
       $( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
       $( "#todo-text-inp" ).val("");
       $( "#todo-text-inp" ).focus();
       $('h1').removeClass("active");
    }
});

// Press the + sign
$("h1.active").click(function(){
  var str = $( "#todo-text-inp" ).val();
  
     if( str != "" && str != null) {
	   $( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
       $( "#todo-text-inp" ).val("");
       $( "#todo-text-inp" ).focus();
       $('h1').removeClass("active");
     }
});
$("#todo-text-inp").focus(function() {
	$("h1").addClass("active");
});
});
