function saveToLocalStorage() {
  var textInput = document.getElementById("textInput").value;
  localStorage.setItem("items", textInput);
}

// Function to retrieve text from local storage
function retrieveFromLocalStorage() {
  var storedText = localStorage.getItem("userText");
  if (storedText) {
    document.getElementById("output").textContent =
      "Text from local storage: " + storedText;
  } else {
    document.getElementById("output").textContent =
      "No text found in local storage.";
  }
}
