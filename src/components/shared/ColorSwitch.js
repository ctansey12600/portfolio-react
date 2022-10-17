function ColorSwitch(index) {
  const color = [true, false];

  const colorSetter = index % color.length;

  return color[colorSetter];
}

export default ColorSwitch;
