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
async function performOCR() {
  const fileInput = document.getElementById("file");
  const outputDiv = document.getElementById("output");

  // Get the selected file
  const file = fileInput.files[0];

  // Check if a file is selected
  if (file) {
    // Read the file using FileReader
    const reader = new FileReader();
    reader.onload = async function (e) {
      const image = new Image();
      image.src = e.target.result;

      // Perform OCR using Tesseract.js
      const {
        data: { text },
      } = await Tesseract.recognize(image);

      // Display the OCR result
      newtext = extract(text);
      outputDiv.innerText = "$" + newtext;
    };

    reader.readAsDataURL(file);
  }
}
function extract(text) {
  textArray = text.split(/\s+/);
  for (let i = textArray.length - 1; i > 0; i--) {
    console.log(text);
    if (!isNaN(Number(textArray[i]))) {
      if (twoDecimals(Number(textArray[i])) && textArray[i].length > 3) {
        return Number(textArray[i]);
      }
    }
  }
}
function twoDecimals(number) {
  const regex = /^\d+\.\d{2}$/;
  return regex.test(number.toString());
}
