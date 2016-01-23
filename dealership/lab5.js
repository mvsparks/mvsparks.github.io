function validateForm() {
	var firstName = document.forms["myForm"]["fname"].value;
	var lastName = document.forms["myForm"]["lname"].value;
    var salesman = document.forms["myForm"]["salesman"].value;
	var service = document.forms["myForm"]["service"].value;
	var selection = document.forms["myForm"]["selection"].value;
	var recommend = document.forms["myForm"]["recommend"].value;
	var comments = document.forms["myForm"]["comments"].value;
	
    if (salesman == "null") {
        alert("Please select your salesman.");
		return false;
    }
	else if(service == "null"){
		alert("Please tell us how well you rate our service.");
		return false;
	}
	else if(selection == "null"){
		alert("Please tell us how good our selection is.");
		return false;
	}
	else if(recommend == "null"){
		alert("Please tell us if you would recommend us.");
		return false;
	}
	else{
		var newWindow = window.open();
        
		newWindow.document.open();
		newWindow.document.write('<!DOCTYPE HTML>' +
								  '<html lang="en">' 
								  + '<head>' 
								  + '<meta charset="utf-8">' 
								  + '<meta name="viewport" content="width=device-width, initial-scale=1">'
								  + '<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">'
								  + '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>'
								  + '<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>'  
								  + '<link rel="stylesheet/less" href="sparks_lab3.less">'
								  + '<script src="less.js" type="text/javascript"></script>'
								  + '</head>'
								  + '<title>Summary</title>'
								  + '<body>'
								  + '<img class="img-responsive logo" src="lab4BResources/logo_bmw_mini_2.jpg" alt="bmw_logo" align="center">'
								  + '<br><br><h3>Thank your for your feedback ' + firstName + ' ' + lastName + '</h3>'
								  + '<br><br><table class="table-condensed form1" style="margin: auto; width: 400px;">'
								  + '<h4 style="color: white;">Summary</h4>'
								  + '<tbody><tr><td>Salesman:</td><td>' + salesman + '</td></tr>'
								  + '<tr><td>Service:</td><td>' + service + '</td></tr>'
								  + '<tr><td>Selection:</td><td>' + selection + '</td></tr>'
								  + '<tr><td>Recommend Us:</td><td>' + recommend + '</td></tr>'
								  + '<tr><td>Comments:</td><td>' + comments + '</td></tr>'
								  + '</table><br><br>'
								  + '<p style="color: white; align: center; font-size: 16px;">We appreciate your feedback. The BMW Group strives to make our customer\'s experience easy and enjoyable.</p>'
								  + '</body>'
								  + '</html>');
		newWindow.document.close();
	}
}


