// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = document.querySelectorAll(".saveBtn");
var textAreaEl = document.querySelector("textarea");
var currentDate = dayjs();


// displays the current date.
$("#currentDay").text(currentDate.format("MMMM/DD/YYYY"));
  // Add a listener for click events on the save button.
$(".saveBtn").on("click", saveSchedule);
    function saveSchedule() {
      var userInput = $(this).parent().attr('id');
      var userValue = $(this).parent().children().eq(1).val();

      localStorage.setItem(userInput, userValue);
      console.log("save");
  } 
  saveSchedule();
//
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  