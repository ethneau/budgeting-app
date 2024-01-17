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
  if (isNaN(newValue)) document.getElementById("update").innerHTML = "$" + bal;
  else {
    document.getElementById("update").innerHTML = "$" + newValue.toFixed(2);
    localStorage.setItem("bal", newValue);
    bal = localStorage.getItem("bal");
  }
}
function setNewBalance() {
  if (isNaN(bal)) document.getElementById("newbal").value = 0.0;
  else {
    document.getElementById("newbal").value = bal.toFixed(2);
  }
}
