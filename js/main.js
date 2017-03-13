var selectMovie;
var unorderedList;
var listItem;

selectMovie = document.querySelector("#button");
unorderedList = document.querySelector("#list");

function removeItem(ev) {
    var toRemoveThis = ev.target; 
    toRemoveThis.parentNode.removeChild(toRemoveThis);
}

function addItem() {
    listItem = document.createElement("li");
    text = prompt("Enter a movie to buy:");
    listItem.innerHTML = text;
    if (text) {
        list.appendChild(listItem);
        listItem.addEventListener("click", removeItem, false); 
    }
}

selectMovie.addEventListener("click", addItem, false);
