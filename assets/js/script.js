// Date at top of screen
const today = moment().format("dddd, MMMM Do");
const currentHour = moment().hours();

// Load tasks from local storage
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

// Function to render colors
const renderColor = () => {
  $(".time-block").each(function () {
    // Breaks attribute down to find specific time
    const timeBlock = parseInt($(this).attr("id").split("h")[1]);

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

// Wait for HTML document to render before loading times
$(document).ready(() => {
  // Place date at top of screen
  $("#currentDay").text(today);
  $("#currentDay").addClass("text-center");
  // Load tasks already saved
  loadTasks();
  renderColor();

  // Save task event listener
  $(".saveBtn").on("click", function () {
    // Siblings function https://www.geeksforgeeks.org/jquery-siblings-with-examples/
    const hour = $(this).siblings(".hour").text();
    const task = $(this).siblings(".description").val();

    // Add key-value pair to local storage
    localStorage.setItem(hour, task);
    alert("Event has been saved!");
  });

  // Update colors after every 15 minutes
  setInterval(renderColor, 900000);
});
