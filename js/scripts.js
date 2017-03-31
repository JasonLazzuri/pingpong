$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();


    var myArray = [];
    var number = JSON.stringify(3);
    var ping = "ping";

    var userInput = function(myArray){
      for(var i = 0; i<= number; i++){
        myArray.push(i);
      }
      if (number % 3 === 0){
      var pinged = (myArray.charAt(3));
      console.log(pinged)

    }return myArray;
    }
    userInput(myArray);



});
