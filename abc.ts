.toggle-option input[value="option1"]:checked + .toggle-slider {
  transform: translateX(0);
  background-color: red;
}

.toggle-option input[value="option2"]:checked + .toggle-slider {
  transform: translateX(60px);
  background-color: gray;
}

.toggle-option input[value="option3"]:checked + .toggle-slider {
  transform: translateX(120px);
  background-color: green;
}