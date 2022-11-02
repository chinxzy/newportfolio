var darkSwitch = document.getElementById('darkSwitch');
var click = darkSwitch.clicked;



/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the value of click is 'true' or 'false'.
 * 
 */

function initTheme() {
  click = !click;

  localStorage.setItem("setTheme", click);

  if (click == true) {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById("darkSwitch").className = "fa fa-sun";
  } else if (click == false) {
    document.body.removeAttribute('data-theme', 'dark');
    document.getElementById("darkSwitch").className = "fa fa-moon";
  }


}
function checkClicked() {
  if (localStorage.getItem("setTheme") == "true") {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById("darkSwitch").className = "fa fa-sun";
  } else {
    document.body.removeAttribute('data-theme', 'dark');
    document.getElementById("darkSwitch").className = "fa fa-moon";
  }
}
/**
 * Summary: resetTheme checks if the value of click is 'true' or 'false' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 */
