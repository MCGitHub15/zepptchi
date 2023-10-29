import { log as Logger } from "@zos/utils";
import LocalStorage from "./utils/storage";

const logger = Logger.getLogger("zepptchi-app");
const fileName = "zepptchi_data.txt";

App({
  globalData: {
    foodType: "chocolate",
    localStorage: null,
  },
  onCreate() {
    try {
      this.globalData.localStorage = new LocalStorage(fileName);
      const { foodType = "chocolate" } = this.globalData.localStorage.get();
      this.globalData.foodType = foodType;
    } catch (e) {
      logger.log("--->e:", e);
    }
  },

  onDestroy() {
    this.globalData.localStorage.set({
      foodType: getApp()._options.globalData.foodType,
    });
  },
});
