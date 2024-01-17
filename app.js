let bal = 0.0;
function changeColor(element, color) {
  element.style.backgroundColor = color;
}
function updateElement() {
  var newValue = bal;
  newValue = bal.toFixed(2);
  document.getElementById("bal").innerHTML = "$" + newValue;
}

// Call the function when the page loads
window.onload = function () {
  updateElement();
};
