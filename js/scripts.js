  // var myArray = [];
  // var userInput = function(myArray){
  //   for(var i = 0; i<=input; i++){
  //     myArray.push(i);
  //
  // }
  // };
  // userInput(myArray);
  //
  //






//   if(myArray.charAt(i) % 3 === 0)
//   replace i w/ pinged
//   else if(myArray.charAt(i) % 5 === 0)
//   replace i w/ ponged
//   else (myArray.charAt(i) % 15 === 0)
//   replace i w/ pp
// }



$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var pinged = "ping"
    var ponged = "pong"
    var pp = "ping-pong"

    var text = $("#userText").val();
    var input = JSON.stringify(text).slice(1,text.length+1);
    var myArray = [];

    for(var i = 1; i <= input; i++){
        myArray.push(i)

    if ((i % 3 === 0) && ((i % 5 !== 0)||(i % 15 !==0))){
      alert("three");
    }else if ((i % 5 === 0) && ((i % 3 !== 0)||(i % 15 !==0))){
      alert("five")
    }else if (i % 15 === 0){
      alert("fifteen")
    }



}$('#result').text(myArray);
  })
});
