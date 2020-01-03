
$("#bt1").click(function(){
	var x = $("#box1").position().left + 10;
	$("#box1").css({"left": x+"px"});
});
$("#bt2").click(function(){
	$(".box").css({"left": 0});
});

var hit = 0;
$("#box2").click(function(){
	hit = hit + 1;
	$("#score").val(hit);
});

setInterval(function(){
	var x = Math.ceil(Math.random()*800);
	var y = Math.ceil(Math.random()*400);
	$("#box2").css({"left": x+"px", "top": y+"px"});
}, 800);