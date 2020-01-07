/*
1. primitive type: Number, String, Boolean, null, undefined
2. Reference type: Object(객체), Array(배열)
*/
var hong = {
	firstName: "길동",
	lastName: "홍",
	age: 27,
	gender: 'M',
	fullName: function() {
		return this.lastName + " " + this.firstName;
	}
};
console.log(hong.firstName);
console.log(hong.lastName);
console.log(hong.age);
console.log(hong.gender);
console.log(hong.fullName());

var std = [];
std[0] = "홍길동";
std[1] = "홍길순";
std[2] = "홍길만";

console.log(std.length);


/* 성적관리프로그램 */
var i = 0;
var html = '';
var std = [];
std[0] = {name: "홍길동", kor: 95, math: 90, eng: 85};
std[1] = {name: "홍길만", kor: 90, math: 75, eng: 80};
std[2] = {name: "홍길룡", kor: 85, math: 76, eng: 92};
std[3] = {name: "홍길순", kor: 88, math: 88, eng: 98};
std[4] = {name: "홍길영", kor: 79, math: 92, eng: 100};
std[5] = {name: "홍길춘", kor: 65, math: 42, eng: 88};

console.log(std);

$("#btScore").click(makeScore);
$("#btReset").click(resetScore);
function makeScore() {
	$("#btReset").trigger("click");
	for(i=0; i<std.length; i++) {
		html  = '<tr>';
		html += '<td>'+(i+1)+'번</td>';
		html += '<td>'+std[i].name+'</td>';
		html += '<td>'+std[i].kor+'점</td>';
		html += '<td>'+std[i].eng+'점</td>';
		html += '<td>'+std[i].math+'점</td>';
		html += '<td>'+(std[i].kor+std[i].eng+std[i].math)+'점</td>';
		html += '</tr>';
		$("#scoreTb > tbody").append(html);
	}
}
function resetScore() {
	$("#scoreTb > tbody").empty();
}
//std.push({name:"홍길왕", kor: 75, eng: 85, math:95});


