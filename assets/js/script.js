// Date at top of screen
let today = moment().format("dddd, MMMM Do");
let currentHour = moment().hours();
// alert(currentHour);

// load tasks from localstorage if they exist
loadTasks = () => {
  $("#nineAm").val(localStorage.getItem("9AM"));
  $("#tenAm").val(localStorage.getItem("10AM"));
  $("#elevenAm").val(localStorage.getItem("11AM"));
  $("#twelvePm").val(localStorage.getItem("12PM"));
  $("#onePm").val(localStorage.getItem("1PM"));
  $("#twoPm").val(localStorage.getItem("2PM"));
  $("#threePm").val(localStorage.getItem("3PM"));
  $("#fourPm").val(localStorage.getItem("4PM"));
  $("#fivePm").val(localStorage.getItem("5PM"));
};

// function to render colors
let renderColor = () => {
  $(".time-block").each(function () {
    let timeBlock = parseInt($(this).attr("id").split("h")[1]);

    if (timeBlock == currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (timeBlock > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
  });
};

// Wait for document to render before loading times
$(document).ready(() => {
  // Date at top of screen
  $("#currentDay").text(today);
  $("#currentDay").addClass("text-center");
  // load tasks already saved
  loadTasks();
  // invoke render colors function here,
  renderColor();
});

// Save task event listener
$(".saveBtn").on("click", function () {
  // Siblings function https://www.geeksforgeeks.org/jquery-siblings-with-examples/
  let hour = $(this).siblings(".hour").text();
  let task = $(this).siblings(".description").val();

  // Add key-value pair to local storage
  localStorage.setItem(hour, task);
});

//set interval to update rendercolor every 15 minutes

///variables
//functions
//event listeners
// change save to icons
// add interval to update colors
