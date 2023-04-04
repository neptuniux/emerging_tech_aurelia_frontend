import { layouts } from "@syncfusion/ej2";

export class MainArea {
  public dashboard: layouts.DashboardLayout;

  constructor() {
    this.dashboard = new layouts.DashboardLayout({
      cellSpacing: [10, 10],
      columns: 10,
      draggableHandle: ".e-panel-header",
      allowResizing: true,
      resizeStart: this.onResizeStart,
      //Dashboard Layout's resize event
      resize: this.onResize,
      //Dashboard Layout's resizestop event
      resizeStop: this.onResizeStop,
      resizableHandles: [
        "e-south-east",
        "e-east",
        "e-west",
        "e-north",
        "e-south",
      ],
      panels: [
        {
          sizeX: 2,
          sizeY: 10,
          row: 0,
          col: 0,
          header:
            '<div class="header">Object list</div><span class="handler e-icons burg-icon"></span>',
          content: '<div class="content">Object list panel</div>',
        },
        {
          sizeX: 6,
          sizeY: 10,
          row: 0,
          col: 2,
          header:
            '<div class="header">Drawing area</div><span class="handler e-icons burg-icon"></span>',
          content: '<div class="content">Drawing area</div>',
        },
        {
          sizeX: 2,
          sizeY: 10,
          row: 0,
          col: 8,
          header:
            '<div class="header">Object property</div><span class="handler e-icons burg-icon"></span>',
          content: '<div class="content">Object property</div>',
        },
      ],
    });
  }

  onResizeStart(args: any) {
    console.log("Resize start");
  }

  //Dashboard Layout's resize event function
  onResize(args: any) {
    console.log("Resizing");
  }

  //Dashboard Layout's resizestop event function
  onResizeStop(args: any) {
    console.log("Resize stop");
  }

  public appendTo(element: string) {
    this.dashboard.appendTo(element);
  }
}
