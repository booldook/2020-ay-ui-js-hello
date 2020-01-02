// bt1을 클릭(이벤트)하면 배경색이 노란색으로 변한다.
/*
document.getElementById("bt1").addEventListener("click", function(){
	document.getElementsByTagName("body")[0].style.backgroundColor = "#ff0";
});
document.getElementById("bt2").addEventListener("click", function(){
	document.getElementsByTagName("body")[0].style.backgroundColor = "#0f0";
});
document.querySelector("#bt1").addEventListener("click", function(){
	document.querySelector("body").style.backgroundColor = "#ff0";
});
document.querySelector("#bt2").addEventListener("click", function(){
	document.querySelector("body").style.backgroundColor = "#0f0";
});
*/

$("#bt1").click(function(){
	$("body").css({"background-color": "#ff0"});
});
$("#bt2").click(function(){
	$("body").css({"background-color": "#0f0"});
});
$("#bt3").click(function(){
	$(".box").css({"background-color": "red"});
});

$(".box").click(function(){
	$(this).css({"background-color": "yellow"});
});

$("#bt4").click(function(){
	// $(".box").hide();
	// $(".box").stop().fadeOut(2000);
	$(".box").stop().slideUp(500);
});
$("#bt5").click(function(){
	// $(".box").show();
	// $(".box").stop().fadeIn(2000);
	$(".box").stop().slideDown(500);
});

$("#bt6").click(function(){
	$("#box4").stop().animate({"left": "90%"}, 500);
});
$("#bt7").click(function(){
	$("#box4").stop().animate({"left": 0}, 500);
});

$("#box5").click(function(){
	if(	$(this).css("background-color") == "rgb(127, 255, 212)"	) {
		$(this).css({"background-color" : "rgb(36, 95, 143)"})
	}
	else {
		$(this).css({"background-color" : "rgb(127, 255, 212)"})
	}
});

$("#box6").click(function(){
	$(this).toggleClass("darkBlue");
});