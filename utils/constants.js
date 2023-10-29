import { getText } from "@zos/i18n";
import { getDeviceInfo, SCREEN_SHAPE_SQUARE } from "@zos/device";
import { Step } from "@zos/sensor";

const step = new Step();

export const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT,
  screenShape,
} = getDeviceInfo();
export const isSquare = SCREEN_SHAPE_SQUARE === screenShape;

export const total_steps = step.getCurrent();

export const FOOD_CALORIES = [
  {
    name: getText("hamburger"),
    type: "hamburger",
    value: 512,
  },
  {
    name: getText("chocolate"),
    type: "chocolate",
    value: 71,
  },
  {
    name: getText("cookie"),
    type: "cookies",
    value: 44,
  },
  {
    name: getText("cake"),
    type: "cake",
    value: 379,
  },
  {
    name: getText("pizza"),
    type: "pizza",
    value: 470,
  },
  {
    name: getText("sausage"),
    type: "sausage",
    value: 381,
  },
  {
    name: getText("ham"),
    type: "ham",
    value: 99,
  },
  {
    name: getText("iceCream"),
    type: "ice cream",
    value: 64,
  },
  {
    name: getText("coffee"),
    type: "coffee",
    value: 64,
  },
  {
    name: getText("beer"),
    type: "beer",
    value: 64,
  },
];