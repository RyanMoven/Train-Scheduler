$(document).ready(function() {
    console.log( "ready!" );

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbcO9fbolP6oKi8EmZKL56VK8fyT3Sc6o",
    authDomain: "train-schedule-database.firebaseapp.com",
    databaseURL: "https://train-schedule-database.firebaseio.com",
    projectId: "train-schedule-database",
    storageBucket: "train-schedule-database.appspot.com",
    messagingSenderId: "281568785753"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// onclick for submit to retrive user input and push to database
$("#user-Submit").on("click", function(event) {
	event.preventDefault();
// Accepts user input
	trainName = $("#user-Train").val().trim();
	destination = $("#user-Destination").val().trim();
	firstTrainTime = $("#user-TrainTime").val().trim();
	frequency = $("#user-Frequency").val().trim();

// Pushes user input to database
database.ref().push({
		dTrainName: trainName,
		dDestination: destination,
		dfirstTrainTime: firstTrainTime,
		dfrequency: frequency,
	
	});
// Empties input text after clicking
$("#user-Train").val("")
$("#user-Destination").val("")
$("#user-TrainTime").val("")
$("#user-Frequency").val("")

}); // end of submit button onclick

// Adds child data (user input) into html
database.ref().on("child_added", function (childSnapshot) {
		var cdSnapshot = childSnapshot.val();
		console.log(cdSnapshot.dTrainName);
// Taking each child value and storing it into a new variable
		var cdTrainName = cdSnapshot.dTrainName;
		var cdDestination = cdSnapshot.dDestination
		var cdFirstTrainTime = cdSnapshot.dfirstTrainTime
		var cdFrequency = cdSnapshot.dFrequency

		  $("#full-Train-List > tbody").append("<tr><td>" + cdTrainName + "</td><td>" + cdDestination + "</td><td>" +
  cdFrequency + "</td><td>" + cdFirstTrainTime + "</tr>");

	
}); 







}); // end of document.ready