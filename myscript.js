$(document).ready(function() {
	$("#p1").click(function() {
		$(".disappear").hide() ;
	});

	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	});

$("p").click(function(){
	alert("hey! don't click me!");
});
