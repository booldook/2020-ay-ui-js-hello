/*
$(객체).css()
1. 가져오기: var bgColor = $(객체).css("background-color");
2. 설정하기1: $(객체).css({"color": "#222"});
3. 설정하기2: $(객체).css({"color": "#222", "padding": "2rem"});
4. 설정하기3: $(객체).css("color", "#222");
*/

$("#btBig").click(chgBig);
$("#btRotate").click(chgRotate);
$("#btHide").click(chgHide);
$("#btShow").click(chgShow);
$("#btDown").click(chgDown);
$("#btUp").click(chgUp);
$("#btReset").click(reset);

function chgBig() {
	$(".box").css("transform", "scale(1.5)");
}

function chgRotate() {
	$(".box").css("transform", "rotate(720deg)");
}

function chgShow() {
	// $(".box").css("opacity", 1);
	$(".box").css("transition", "unset");
	$(".box").stop().fadeIn(3000);
}

function chgHide() {
	// $(".box").css("opacity", 0);
	$(".box").css("transition", "unset");
	$(".box").stop().fadeOut(3000);
}

function chgDown() {
	$(".box").css("transition", "unset");
	$(".box").stop().slideDown(1000);
}

function chgUp() {
	$(".box").css("transition", "unset");
	$(".box").stop().slideUp(1000);
}

function reset() {
	$(".box").css({
		"transform": "unset", 
		"opacity": 1,
		"display": "unset", 
		"transition": "all 1s"
	});
}