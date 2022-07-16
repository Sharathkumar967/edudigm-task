const options = { color1: "Red", color2: "Green", color3: "Blue" };

var select = document.getElementById("selectNumber");

for (let obj in options) {
  var opt = options[obj];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
  select.style.background = "red";
  select.style.color = "#ffff";
  select.style.borderRadius = "8px";
  select.style.border = "none";
  select.style.padding = "10px";
}

select.onchange = (event) => {
  var inputText = event.target.value;
  select.style.background = inputText;
};
