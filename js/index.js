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

