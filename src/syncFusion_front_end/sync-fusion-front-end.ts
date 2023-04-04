import { base } from "@syncfusion/ej2";
import { TopRibbon } from "./topRibbon";
import { MainArea } from "./mainArea";

base.enableRipple(true);

export class SyncFusionFrontEnd {
  //public topRibbon;
  //public dashboard;

  public topRibbon = new TopRibbon();
  public dashboard = new MainArea();

  constructor() {
    this.attached();
  }

  public attached() {
    this.topRibbon.appendTo("#ribbon-menu");
    this.dashboard.appendTo("#dashboard_default");
  }
}
