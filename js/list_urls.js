/*
 * List your favorite URLs.
 *
 * @author Oscar Hong (ch311) and Shirom Kapur (sk423)
 */
var link1 = 'http://www.cs.duke.edu/';
var link2 = 'http://www.oscarhong.me/';
var link3 = 'http://www.shiromkapur.io/';

var many_links = [link1, link2, link3];

// functions that do the actual work
function addLinks () {
    var list = document.getElementById('js-linklist');

    for (i = 0; i < many_links.length; i++) {
      var toAdd = document.createElement('li');
      var name = getName(many_links[i]);
      toAdd.innerHTML = '<a href="' + many_links[i] + '">' + name + '</a>';
      list.appendChild(toAdd);
    }
}

function getName (url) {
  var name;

  for (j = 0; j < url.length; j++) {
    if (url.substring(j-3,j) == 'www'){
      name = url.substring(j+1);
    }
  }

  for (k = name.length; k >= 0; k--) {
    if (name[k] == '.'){
      name = name.substring(0,k);
      break;
    }
  }

  return name;
}

// load links as soon as the script loads
addLinks();
