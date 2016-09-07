var app = angular.module('questionnaireApp', []);

app.directive('questionnaire', function(qFactory){
	return{
		restrict: 'AE',
		scope: {},
		templateUrl: 'templates/questionnaire.html',
		link: function(scope, elem, attrs){
			scope.start = function(){
				scope.id = 0;
				scope.finished = false;
				scope.inProgress = true;
				scope.getQuestion();
				scope.valid = true;
			};
			
			scope.getQuestion = function(){
				var q = qFactory.getQuestion(scope.id);
				var answer = $('input[name=option]:checked').val();
				console.log(answer);

				//checking to see if next question is dependent of previous
				if(scope.dependant == true && answer == 'No'){
					//resetting selection
					$('input[name=option]').attr('checked', false);
					scope.id++;
					scope.dependant = false;
					scope.getQuestion();
				}
				else if(q){
					//resetting selection
					$('input[name=option]').attr('checked', false);
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.type = q.type;
					scope.fieldName = q.fieldName;
					scope.dependant = q.dependant;
				} else {
					scope.finished = true;
				}
			};
			
			scope.validate = function(){
				if (!($('input[name=option]').is(':checked'))){
					return scope.valid = false;
				} else {
					scope.valid = true;
					scope.nextQuestion();
				}
			};
			
			scope.nextQuestion = function(){
				scope.id++;
				scope.getQuestion();
			}
			
			scope.reset = function(){
				scope.inProgress = false;
			}
		}
	}
});

app.factory('qFactory', function() {
	var questions = [
		{
			question: "Are you a student in the Knoxville area?",
			options: ["Yes", "No"],
			fieldName: "questionStudentA",
			dependant: true,
			type: 'radio'
		},
		{
			question: "Which college are you currently seeking a degree at?",
			options: ["University of Tennessee Knoxville", 
					  "Pellissippi State Community College", 
					  "Roane State Community College", 
					  "University of Tennessee Chattanooga", 
					  "East Tennessee State University", 
					  "Other"],
			fieldName:"questionIncorporatedA",
			dependant: false,
			type: 'radio'
		},
		{
			question: "Have you incorporated, or formed any legal entity (like an LLC) yet?",
			options: ["Yes", "No"],
			fieldName:"questionStudentB",
			dependant: true,
			type: 'radio'
		},
		
		{
			question: "What is your company's structure?",
			options: ["Sole Proprietorship", "Partnership", "Corporation"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Do you plan for your organization to be for profit or non-profit?",
			options: ["For profit", "Non-Profit"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "How many individuals are on the founding team?",
			options: ["1", "2", "3", "4", "More than 10"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "How long have you been in operation?",
			options: ["Less than 1 year", "1-2 years", "2-5 years", "Over 5 years"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Do you have revenue?",
			options: ["Yes", "No"],
			dependant: true,
			type: 'radio'
		},
		{	
			question: "What is your current revenue?",
			options: ["under $100,000", "$100,000-$250,000", "$250,000-$500,000", "$500,000-$1 Million", "Over $1 Million"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Other than yourself, do you have any employees in your organization?",
			options: ["Yes", "No"],
			dependant: true,
			type: 'radio'
		},
		{	
			question: "How many employees do you have?",
			options: ["2-9", "10-99", "100-499", "Over 500"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Do you have intellectual property?",
			options: ["Yes", "No"],
			dependant: true,
			type: 'radio'
		},
		{	
			question: "Do you own or license any of your intellectual property? Check all which apply",
			options: ["Own intellectual property", "Licensed intellectual property"],
			dependant: false,
			type: 'checkbox'
		},
		{	
			question: "Have you raised capital?",
			options: ["Yes", "No"],
			dependant: true,
			type: 'radio'
		},
		{	
			question: "How have you raised capital? Check all which apply",
			options: ["Through debt", "Through equity"],
			dependant: false,
			type: 'checkbox'
		},
		{	
			question: "Are you interested in working with an accelerator?",
			options: ["Yes", "No"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Are you interested in working with an incubator?",
			options: ["Yes", "No"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Are you seeking to prioritize workshops?",
			options: ["Yes", "No"],
			dependant: false,
			type: 'radio'
		},
		{	
			question: "Are you seeking to prioritize networking?",
			options: ["Yes", "No"],
			dependant: false,
			type: 'radio'
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});