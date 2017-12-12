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

//me Pushes user input to database
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

}); // end of submit onclick








}); // end of document.ready