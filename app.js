if (!localStorage.getItem("bal")) localStorage.setItem("bal", 10.0);
bal = parseFloat(localStorage.getItem("bal"));

function changeColor(element, color) {
  element.style.backgroundColor = color;
}
function updateElement() {
  if (isNaN(bal.toFixed(2)))
    document.getElementById("bal").innerHTML = "$" + 0.0;
  else document.getElementById("bal").innerHTML = "$" + bal.toFixed(2);
}
function saveBalance() {
  let newBal = document.getElementById("newbal").value;
  let newValue = parseFloat(newBal);
  if (!isNaN(newValue)) {
    localStorage.setItem("bal", newValue);
    bal = localStorage.getItem("bal");
  }
  alert("saved!");
}
function setNewBalance() {
  if (isNaN(bal)) document.getElementById("newbal").value = 0.0;
  else {
    document.getElementById("newbal").value = bal.toFixed(2);
  }
}
function getFile() {
  file = document.getElementById("file").value;
  alert(file);
}
function displayImage() {
  const input = document.getElementById("file");
  const container = document.getElementById("imageContainer");

  // Check if a file is selected
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Create an image element and set its source to the selected file
      const img = document.createElement("img");
      img.src = e.target.result;

      // Append the image to the container
      container.innerHTML = "";
      container.appendChild(img);
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(input.files[0]);
  }
}
