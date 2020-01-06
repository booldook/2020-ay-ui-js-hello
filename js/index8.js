// 1 ~ 10 더하면? 55
// 1 ~ 100 더하면? 5050
// 1 ~ 1000 더하면? 500500
// 1 ~ 10000 더하면? 50005000
// %, =, ==, ++, +=

var a = 0;
a = a + 1;
console.log(a);
a = a + 1;
console.log(a);
a++; // a = a + 1;
console.log(a);
a += 5; // a = a + 5;
console.log(a);

var sum = 0;
for(var i=1; i<=10; i++) {
	sum += i; // sum = sum + i;
}
// alert(sum);

//------------------------------
$("#btMake").click(function(){
	var html = '';
	var style = '';
	var r = 0;
	var g = 0;
	var b = 0;
	for(var i=0; i<1000; i++) {
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		style = 'rgb('+r+', '+g+', '+b+')';
		html  = '<div class="box" style="background-color: '+style+'">';
		html += '</div>';
		$(".wrapper").append(html);
	}
	$(".box").mouseover(function(){
		$(this).animate({"opacity": 0}, 2000);
	});
});
$("#btReset").click(function(){
	$(".wrapper").empty();
});
