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
// If any errors occurs
}, function(errorObject) {
		console.log("Errors handled:" + errorObject.code);
	
	
}); // end of child added


var tFrequency = 3;

    // Time is 3:30 AM
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

// NEED TO APPEND FREQUENCY CALCULATIONS & NEXT TRAIN TIME INTO HTML

}); // end of document.ready