// Zepptchi's main page 
import * as hmUI from "@zos/ui";
import AutoGUI, { DEVICE_WIDTH } from '@silver-zepp/autogui';
import { assets } from '@zos/utils';
import { push } from "@zos/router";
import { getText } from "@zos/i18n";
// import { total_steps } from "../../utils/constants";
import { Step } from "@zos/sensor";
import { LocalStorage } from '@zos/storage'

const localStorage = new LocalStorage()

const gui = new AutoGUI();

const total_steps = new Step();
// This variable will track our steps.
const stepCount = new Step();
const steps = stepCount.getCurrent();
let stepData = localStorage.getItem('state');

if (stepData) {
  let stepData = localStorage.getItem('state');
} else {
  stepData = steps;
}

let temp_steps_counter = stepData;
console.log("make temp step")
// let points = total_steps;

class IndexPage {
  init(){
    const fill_rects = gui.fillRect(0x6984CC);
    console.log("page is being built");
    let txt_steps = gui.text("Points: " + temp_steps_counter, { text_size: (480 - 368) / 2});

    gui.newRow();

    const bear_img = gui.image("bear.png");
    gui.newRow();

    const store_button = gui.button("Store", () => {
      // Take you to new store page
      temp_steps_counter = temp_steps_counter - 10
      localStorage.setItem('state', temp_steps_counter);
      push({
        url: "page/gt/food-list",
      });
   });
    AutoGUI.SetBtnRadius(30);

  
    // Render the GUI.
    gui.render();
    fill_rects.update({x:0, y:0, w:480, h:480});
    txt_steps.update({x: 0, w: 480, align_h: hmUI.align.CENTER_H});

    // Callbacks.
    const cb_Steps = () => {
      txt_steps.update({ text: "Pots: " + temp_steps_counter });
      console.log(visits);
    };

    // and on change events
    steps.onChange(cb_Steps)
  }
}

Page({
  state: {
    data:null,
    storage: localStorage
  },
  build(){
    this.indexPage = new IndexPage();
    this.indexPage.init();
  },
  onDestroy(){
    this.indexPage.destroy();
    localStorage.setItem('state', this.state.data)
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