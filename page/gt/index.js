// Zepptchi's main page 
import AutoGUI from '@silver-zepp/autogui';
const gui = new AutoGUI();

import { Step } from "@zos/sensor";

// This variable will track our steps.
const step = new Step();

class IndexPage {
  init(){
    const txt_steps = gui.text("Steps: 0");

    gui.newRow();

    // Render the GUI.
    gui.render();

    // Callbacks.
    const cb_Steps = () => {
      txt_steps.update({ text: "Steps: " + step.getCurrent() });
    };

    // and on change events
    step.onChange(cb_Steps)
  }
}

Page({
  build(){
    this.indexPage = new IndexPage();
    this.indexPage.init();
  },
  onDestroy(){
    this.indexPage.destroy();
  }
})


/** HELPERS (Credit to Silver) */

// don't turn off the screen for 600 seconds
import { setPageBrightTime } from '@zos/display'
const result = setPageBrightTime({
  brightTime: 600 * 1000,
})

// don't turn off the screen on wrist down for 600 seconds
import { pauseDropWristScreenOff } from '@zos/display'
pauseDropWristScreenOff({
  duration: 600 * 1000,
})