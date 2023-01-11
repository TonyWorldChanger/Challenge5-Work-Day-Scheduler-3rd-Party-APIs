// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = document.querySelectorAll(".saveBtn");
var textAreaEl = document.querySelectorAll("textarea");
var currentDate = dayjs();
var totalHours = 11;
var divEl = document.querySelectorAll(".time-block");
var currentHour = currentDate.format("H");


// displays the current date.
$("#currentDay").text(currentDate.format("MMMM DD,YYYY HH:mm A"));

// Adds a listener for click events on the save button and saves input to localStorage.
$(".saveBtn").on("click", saveSchedule);
    function saveSchedule() {
      var userInput = $(this).parent().attr('id');
      var userValue = $(this).parent().children().eq(1).val();

      localStorage.setItem(userInput, userValue);
      console.log("save");
  } 
  saveSchedule();

//code gets any user input that was saved in localStorage
    function loadSchedule() {
      console.log("load", divEl);
      for (var i = 0; i < divEl.length; i++) {
        var textId = divEl[i].id
        var storageText = localStorage.getItem(textId);
        
        var textArea = divEl[i].children[1]
        console.log(textArea);

        if (storageText !== undefined) {
          textArea.innerText = storageText       }
      }
      
    }
    loadSchedule();
    
 //code applies the past, present, or future class to each time
  function hourChange() {
    console.log("load", divEl);
    for (var i = 0; i < divEl.length; i++) {
      var textId = divEl[i].id
      var divHour = textId.split("hour-")[1]
      console.log(divHour);
        if (divHour < currentHour) {
          divEl[i].classList.add("past");
        } else if (divHour === currentHour) {
          divEl[i].classList.add("present");
        } else if (divHour > currentHour) {
          divEl[i].classList.add("future");
        }

      
    }
    
  }
  hourChange();