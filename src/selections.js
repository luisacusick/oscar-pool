function addListener(elem, elems, category) {
    elem.addEventListener("click", function() {
        handleSelection(elem, elems, category);
    });
}

function addListeners(category){
    var query = "#" + category + " button";
    var elems = document.querySelectorAll(query);
    for (var i = 0; i < elems.length; i++) {
        addListener(elems[i], elems, category);
    }
}

function unClickButtons(elems) {
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.remove('btn-clicked');
    }
}

function handleSelection(elem, elems, category) {    
    // To-Do: insert selection into user's table
    unClickButtons(elems);
    elem.classList.add('btn-clicked'); // add outline to clicked button
}

var bestPicNoms = ["top-gun", "banshees", "everything-everywhere", "fabelmans", "all-quiet", "tar", "elvis", "avatar", "triangle", "women-talking"];

addListeners("best-picture", bestPicNoms);