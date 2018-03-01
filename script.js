var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	delB(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


var delB = function(event) {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	event.appendChild(button);
	button.addEventListener("click", function(){
		ul.removeChild(event)
	});
}



li.forEach(function(e){
	delB(e);
	e.addEventListener("click", function(){
		e.classList.toggle("done");
	})

})

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);