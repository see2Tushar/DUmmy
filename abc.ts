.toggle-container {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 34px;
}

.toggle-option {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  position: relative;
  cursor: pointer;
}

.toggle-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.2s;
}

.toggle-option input {
  display: none;
}

.toggle-option input:checked + .toggle-slider {
  background-color: #2196f3;
}

.toggle-option input:checked + .toggle-slider::before {
  transform: translateX(46px);
}

.toggle-slider::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 28px;
  background-color: #fff;
  transition: transform 0.2s;
}