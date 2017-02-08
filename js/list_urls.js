/*
 * List your favorite URLs.
 *
 * @author YOUR NAME HERE
 */
var link = 'http://www.cs.duke.edu/';


// functions that do the actual work
function addLinks () {
    var list = document.getElementById('js-linklist');
    var toAdd = document.createElement('li');
    toAdd.innerHTML = '<a href="' + link + '">' + link + '</a>';
    list.appendChild(toAdd);
}

// load links as soon as the script loads
addLinks();
