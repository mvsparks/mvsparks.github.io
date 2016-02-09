$.ajax({  
		type: 'POST',  
		url: 'admin.php', 
		data: { action: 'add', empNum: employeeNum, empFirst: empFirstName, empLast: empLastName, empEmail: employeeEmail, empPass: empPassword ,
		empTimesheet: timesheet, empServiceForm: serviceForm, empZonesheet: zonesheet, empChangeOrder: changeorder, empMailingList: mailinglist,
		empPlaceOrder: placeorder, empPayroll: payroll, empAdministrator: administrator},
		success: function(response) {
			alert(response);
		}
	});