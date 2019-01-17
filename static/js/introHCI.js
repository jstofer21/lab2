$("a.thumbnail").click(projectClick);

function displayResult() {
    var elem = document.getElementById("Button1");
    var elem2 = document.getElementById("name");
    elem2.innerHTML = "JavaScript Connected"
    if (elem.value=="Not Connected") elem.innerHTML = "Connected!";
}

function projectClick(e) { 
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    $(this).css("background-color", "#7fff00");
}
