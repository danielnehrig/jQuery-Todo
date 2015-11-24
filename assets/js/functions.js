$( document ).ready(function() {
// Action Functions
function UpdateItems() {
	var n = $( "li.row" ).length;
	$("i.items").text( n + " Items Left");
};
$(document).on('click', '.remove', function() {
	$(this).parent().remove();
	UpdateItems();
});
$(document).on('click', '.completed', function() {
	var $this = $(this);
	$(this).parent().toggleClass("complete");
	$(this).toggleClass("hov");
	if($(".filter-active").hasClass('active')) {
		$this.parent().hide();
	};
});
$(document).keypress(function(e) {
	var str = $( "#todo-text-inp" ).val();
	if(e.which == 13 && str != "" && str != null ) {
		$( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
		$( "#todo-text-inp" ).val("");
		$( "#todo-text-inp" ).focus();
		$('h1').removeClass("active");
		UpdateItems();
	}
});
$("h1.active").click(function(){
	var str = $( "#todo-text-inp" ).val();
	if( str != "" && str != null) {
		$( "<li class='row'><a class='remove' href='#'><i class='fa fa-trash-o'></i></a><a class='completed' href='#'><i class='fa fa-check'></i></a>"+ str +"</li>" ).fadeIn().appendTo("ul");
		$( "#todo-text-inp" ).val("");
		$( "#todo-text-inp" ).focus();
		$('h1').removeClass("active");
		UpdateItems();
	}
});
$("#todo-text-inp").val(function() {
	$("h1").addClass("active");
});
// Filter
$(".filter-complete").click(function() {
	$(this).addClass("active");
	$(".filter-active, .filter-all").removeClass("active");
	$("li.row").hide();
	$("li.row.complete").show();
	UpdateItems();
});
$(".filter-all").click(function() {
	$(this).addClass("active");
	$(".filter-complete, .filter-active").removeClass("active");
	$("li.row").show();
	UpdateItems();
});
$(".filter-active").click(function() {
	$(this).addClass("active");
	$(".filter-complete, .filter-all").removeClass("active");
	$("li.row").show();
	$("li.row.complete").hide();
	UpdateItems();
});
});