var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var deleteBtn = document.querySelectorAll(".delete")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteBtn);
	ul.appendChild(li);
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



listItem.forEach(function(item) {
	item.addEventListener("click", function() {
		item.classList.toggle("done");
	})
})

deleteBtn.forEach(function(btn) {
	btn.addEventListener("click", function() {
		btn.parentNode.parentNode.removeChild(btn.parentNode)
	})
})

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);