import { buttons, navigations } from "@syncfusion/ej2";
import { autoinject } from "aurelia-framework";
import { App } from "../app";

@autoinject
export class Welcome {
  public buttonTv: buttons.Button = new buttons.Button();
  public buttonSfv: buttons.Button = new buttons.Button();
  public accordion: navigations.Accordion = new navigations.Accordion({
    items: [
      {
        header: "TreeView",
        content:
          "The TreeView component is used to display the hierarchical data in a tree structure. It has the capability to load its child nodes on demand, and also allows you to drag and drop nodes within the same TreeView or between different TreeView instances.",
      },
      {
        header: "SyncFusion Front End",
        content:
          "Syncfusion provides the best third-party UI components for WinForms, WPF, ASP.NET Web Forms, MVC, Core, UWP, Xamarin, JavaScript, Angular, Vue and React. Try our 100% free UI controls.",
      },
    ],
  });

  constructor(private app: App) {}

  handleClickTv(event: Event) {
    this.app.navigateToTreeView(event);
  }

  handleClickSfv(event: Event) {
    this.app.navigateToSyncfusionView(event);
  }

  public attached() {
    this.accordion.appendTo("#accordion");
    this.buttonTv.appendTo("#buttonTv");
    this.buttonSfv.appendTo("#buttonSfv");
  }
}
