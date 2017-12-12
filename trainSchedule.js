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
// form initializer
var trainName = ""
var destination = ""
var firstTrainTime = ""
var frequency = ""








}); // end of document.ready