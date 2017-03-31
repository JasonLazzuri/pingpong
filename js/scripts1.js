$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var text = $("#userText").val();
    var input = JSON.stringify(text).slice(1,text.length+1);
    var myArray = [ ];

if (var i = 0; i <= input; i++)
  if (i % 3 === 0){
    input.append(myArray);
  }
