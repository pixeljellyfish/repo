// Get the container element
var btnContainer = document.getElementById("myBtnContainer");

// Get all buttons with class="btn" inside the container
var btn = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

// Get the container element
var btnContainer = document.getElementById("myBtnContainer");

// Get all buttons with class="btn" inside the container
var btn = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
} 

window.onload=function(){
    document.getElementById("ShowAll").click();
  };