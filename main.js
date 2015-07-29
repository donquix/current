

var xmlhttp = new XMLHttpRequest();
var url = "https://github.com/donquix/current/blob/gh-pages/my.txt";
//var url = "http://www.w3schools.com/website/customers_mysql.php";

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var arr = JSON.parse(xmlhttp.responseText);
		myFunction(arr);
		//myFunction1(arr);
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
		