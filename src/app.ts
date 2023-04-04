import { Router, RouterConfiguration } from "aurelia-router";
import { autoinject, PLATFORM } from "aurelia-framework";

@autoinject
export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("welcome/welcome"),
        nav: true,
        title: "Home",
      },

      {
        route: ["syncFusionFrontEnd"],
        name: "syncFusionFrontEnd",
        moduleId: PLATFORM.moduleName(
          "syncFusion_front_end/sync-fusion-front-end"
        ),
        nav: true,
        title: "syncFusion Front End",
      },
      {
        route: "treeView",
        name: "treeView",
        moduleId: PLATFORM.moduleName("tree_table_view/tree-table-view"),
      },
    ]);
  }

  navigateToTreeView(event: Event) {
    this.router.navigateToRoute("treeView");
  }

  navigateToSyncfusionView(event: Event) {
    this.router.navigateToRoute("syncFusionFrontEnd");
  }
}
