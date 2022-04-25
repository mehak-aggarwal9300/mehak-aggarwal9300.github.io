// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateAadhaar(input, message){
var regexp = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
var ano = document.getElementById("aadhar").value;

if(regexp.test(ano)) {
	return showSuccess(input)
}
 return showError(input, message);
}

const form = document.querySelector("#report");

const NAME_REQUIRED = "Please enter name";
const INVALID_AADHAR="Aadhar number not valid";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let aadharValid = validateAadhaar(form.elements["aadhar"], INVALID_AADHAR);
	// if valid, submit the form.
	if (nameValid&&aadharValid) {
		alert("Success!! \n (Demo only. No form was posted.)");
	}
});
