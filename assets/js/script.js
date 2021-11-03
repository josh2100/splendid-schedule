// Date at top of screen
let today = moment().format("dddd, MMMM Do");
let currentHour = moment().hour();
alert(currentHour);

// load tasks
loadTasks = function () {
  $("#nineAm").val(localStorage.getItem("9AM"));
  $("#tenAm").val(localStorage.getItem("10AM"));
};

// function to render colors

// Wait for document to render before loading times
$(document).ready(function () {
  // Date at top of screen
  $("#currentDay").text(today);
  $("#currentDay").addClass("text-center");
  // load tasks already saved
  loadTasks();
  // invoke render colors function here,
});

// Save task
$(".saveBtn").on("click", function () {
  // Siblings function https://www.geeksforgeeks.org/jquery-siblings-with-examples/
  let hour = $(this).siblings(".hour").text();
  let task = $(this).siblings(".description").val();

  // Add pair to local storage
  localStorage.setItem(hour, task);
});

///variables
//functions
//event listeners
