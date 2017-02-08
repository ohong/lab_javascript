/*
 * Build a rainbox dynamically.
 *
 * @author YOUR NAME HERE
 */
// elements that will be used in multiple functions
var color = document.getElementById('color_picker');


// functions that do the actual work
function addStripe () {
    var content = document.getElementById('content');
    var toAdd = document.createElement('div');
    toAdd.className = 'stripe';
    toAdd.style.backgroundColor = color.value;
    content.appendChild(toAdd);
}


// add interactivity to HTML elements
document.getElementById('div_adder').addEventListener('click', addStripe, false);
