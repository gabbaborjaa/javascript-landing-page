/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 */

// This selects all of the sections in HTML, and puts them in a NodeList (which is not an array!).
let sectionElements = document.querySelectorAll("section");
// Convert NodeList to real array - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
let sections = Array.from(sectionElements);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// Creating the Navigation Bar
for (const section of sections){
  //  Get empty UL, so that I can attach the navigation to it
  let list = document.getElementById("navbar__list");

  //  Create an Anchor Element, and set the attribute to Href.
  let linkItem = document.createElement("a");
  linkItem.setAttribute("href", "#" + section.id);

  // Add Human readable text to the Anchor Element.
  linkItem.textContent = section.dataset.nav

  //  Create list item, generic name for loop
  let listItem = document.createElement("li");

  //  Appending the Anchor link to the UL
  list.appendChild(listItem);

  // Adding link item to the UL
  listItem.appendChild(linkItem);
}


// Add class 'active' to section when near top of viewport
function activeViewport(){
  for(let section of sections){ 
    const item = section.getBoundingClientRect();
    const activeElement = document.getElementById(section.id);
    if (item.y <= 90 && item.bottom >=150){
      section.classList.add("active");
    }
    else {
      section.classList.remove("active");
    }
  }
}
document.addEventListener('scroll', activeViewport);


// Scroll to anchor ID using scrollTO event
// I'm using css for this, because its better

/**
 * End Main Functions
 * Begin Events
 * 
*/
