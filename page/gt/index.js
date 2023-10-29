import AutoGUI from '@silver-zepp/autogui';
const gui = new AutoGUI();

import { Step } from "@zos/sensor";
const step = new Step();

var my_text = gui.text("0");
gui.render();

const changeCallback = () => {
  my_text.update({ text: "Steps:" + step.getCurrent() });
};

step.onChange(changeCallback)
