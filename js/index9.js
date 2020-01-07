function zp(n) {
	/*
	if(n < 10) {
		return "0"+n;
	}
	else {
		return n;
	}
	if(n < 10) return "0"+n;
	else return n;
	*/
	return n < 10 ? "0"+n : n; // 3항 조건문
}

console.log(zp(2));

function yoilCheck() {
	var d = new Date();
	var yoil = '';
	switch(d.getDay()) {
		case 0:
			yoil = "일요일";
			break;
		case 1:
			yoil = "월요일";
			break;
		case 2:
			yoil = "화요일";
			break;
		case 3:
			yoil = "수요일";
			break;
		case 4:
			yoil = "목요일";
			break;
		case 5:
			yoil = "금요일";
			break;
		case 6:
			yoil = "토요일";
			break;
	}
	return yoil;
}

function dayCheck() {
	var d = new Date();
	return d.getDate();
}

function timeCheck() {
	var d = new Date();
	var time = zp(d.getHours())+":"+zp(d.getMinutes())+":"+zp(d.getSeconds());
	return time;
}

$("#bt1").click(function(){
	alert(	yoilCheck() + " 입니다."	);
});

$("#bt2").click(function(){
	alert(	dayCheck() + "일 입니다."	);
});

$("#bt3").click(function(){
	alert(	timeCheck() + " 입니다."	); // 11:04:27
});