// bt1을 클릭(이벤트)하면 배경색이 노란색으로 변한다.
document.getElementById("bt1").addEventListener("click", function(){
	document.getElementsByTagName("body")[0].style.backgroundColor = "#ff0";
});
document.getElementById("bt2").addEventListener("click", function(){
	document.getElementsByTagName("body")[0].style.backgroundColor = "#0f0";
});


