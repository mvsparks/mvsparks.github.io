$.ajax({  
		type: 'POST',  
		url: 'https://api.hubapi.com/calendar/v1/events/task/600442?hapikey=demo', 
		data: {
          "eventDate": 1425760557000,
          "state": "DONE",
          "category": "BLOG_POST",
          "campaignGuid": "f43fe9fd-4082-4a45-93d8-cb8a88f01654",
          "name": "Test Blog Task With topics updated",
          "description": "Cool Post with Topics",
          "ownerId": 13316,
          "topicIds": [
            330075656
          ]
        },
		success: function(response) {
			alert(response);
		}
	});