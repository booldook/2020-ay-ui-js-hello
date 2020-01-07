/*
for(var i=2; i<10; i++) {
	for(var j=1; j<10; j++) {
		console.log(i * j);
	}
}
<thead class="thead-dark">
	<tr>
		<th>2단</th>
		<th>3단</th>
		<th>4단</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>2 x 1 =2</td>
		<td>3 x 1 =3</td>
		<td>4 x 1 =4</td>
	</tr>
	<tr>
		<td>2 x 2 =4</td>
		<td>3 x 2 =5</td>
		<td>4 x 2 =8</td>
	</tr>
</tbody>
*/
var i = 0;
var j = 0;
var html = '';

$("#btMake").click(function(){
	$("#gugudanTb").empty();
	html  = '<thead class="thead-dark text-center">';
	html += '<tr>';
	for(i=2; i<=9; i++) {
		html += '<th>'+i+'단</th>';
	}
	html += '</tr>';
	html += '</thead>';
	$("#gugudanTb").append(html);
});
$("#btReset").click(function(){
	$("#gugudanTb").empty();
});

