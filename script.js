/*
	WEB 303 Assignment 1 - jQuery
	Name : Kunj Patel
	SNum : W0828761
	Date : 2023-09-16
*/

$(document).ready(function() {
	// Event handler for keyup events in salary or percent fields
	$("#yearly-salary, #percent").on("keyup", function() {
	  // Get the values from the input fields
	  var salary = parseFloat($("#yearly-salary").val());
	  var percent = parseFloat($("#percent").val());
  
	  // Check if both fields contain valid numbers
	  if (!isNaN(salary) && !isNaN(percent)) {
		// Calculate the amount and round it to two decimal places
		var amount = (salary * percent / 100).toFixed(2);
  
		// Update the span#amount element with the calculated amount
		$("#amount").text("$" + amount);
	  } else {
		// If input is not valid, display an error message
		$("#amount").text("Invalid input");
	  }
	});
  });
  