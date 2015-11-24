$( document ).ready(function() {

$(document).on('click', '.remove', function() {
  $(this).parent().slideUp();
});

$(document).on('click', '.completed', function() {
   $(this).parent().toggleClass("complete");
   $(this).toggleClass("hov");
});

$(document).keypress(function(e) {
    var str = $( "#todo-text-inp" ).val();
  
    if(e.which == 13 && str != "" && str != null ) {
       $( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
       $( "#todo-text-inp" ).val("");
       $( "#todo-text-inp" ).focus();
       $('h1').removeClass("active");
    }
});

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

$(".filter-complete").click(function() {
  $(this).addClass("active");
  $(".filter-active, .filter-all").removeClass("active");
  $("li.row").slideUp();
  $("li.row.complete").slideDown();
});
$(".filter-all").click(function() {
  $(this).addClass("active");
  $(".filter-complete, .filter-active").removeClass("active");
  $("li.row").fadeIn();
});
$(".filter-active").click(function() {
  $(this).addClass("active");
  $(".filter-complete, .filter-all").removeClass("active");
  $("li.row").slideDown();
  $("li.row.complete").slideUp();
});

});
