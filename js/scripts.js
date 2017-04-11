function name(userInput) {
  var myArray = [];
    for(var i = 1; i <= userInput; i++){
    if (i % 15 === 0){
      myArray.push("ping-pong");
    }else if (i % 5 === 0){
      myArray.push("pong");
    }else if (i % 3 === 0){
        myArray.push("ping");
    }else {
      myArray.push(i);
    }
  }return myArray;
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();


    var userInput = $("#userText").val();
    var result = name(userInput);

    $('#result').text(result).show();
  });
});
