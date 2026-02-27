/* Function 1: Initialization
   Runs when the page loads to ensure keyboard accessibility.
*/
function addTabIndex() {
    // 1. Add a console.log message to prove the event triggers
    console.log("Page loaded. Initializing gallery and adding tabindex!");

    // 2. Select all the images in your gallery using their class name
    let images = document.querySelectorAll('.preview');

    // 3. Write a for loop to go through each image
    for (let i = 0; i < images.length; i++) {
        // 4. Add the tabindex attribute so they can be focused with the Tab key
        images[i].setAttribute('tabindex', '0');
    }
}

/* Function 2: Update Display
   Runs when the mouse hovers over an image (onmouseover) 
   OR when it receives keyboard focus (onfocus).
*/
function upDate(previewPic) {
    // 1. Change the text of the main display to the alt text of the active image
    document.getElementById('image').innerHTML = previewPic.alt;

    // 2. Change the background image of the main display to the source of the active image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Function 3: Revert Display
   Runs when the mouse leaves the image (onmouseout) 
   OR when it loses keyboard focus (onblur).
*/
function unDo() {
    // 1. Revert the background image back to empty
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Revert the text back to the original default text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}