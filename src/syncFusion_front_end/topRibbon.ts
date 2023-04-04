import { ribbon } from "@syncfusion/ej2";

const fontSize: string[] = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "36",
  "48",
  "72",
  "96",
];

const fontStyle: string[] = [
  "Algerian",
  "Arial",
  "Calibri",
  "Cambria",
  "Cambria Math",
  "Courier New",
  "Candara",
  "Georgia",
  "Impact",
  "Segoe Print",
  "Segoe Script",
  "Segoe UI",
  "Symbol",
  "Times New Roman",
  "Verdana",
  "Windings",
];

export class TopRibbon {
  public topRibbon: ribbon.Ribbon;
  private topTabs: ribbon.RibbonTabModel[] = [
    {
      header: "Home",
      groups: [
        {
          id: "clipboard",
          header: "Clipboard",
          showLauncherIcon: true,
          groupIconCss: "e-icons e-paste",
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.SplitButton,
                  allowedSizes: ribbon.RibbonItemSize.Large,
                  splitButtonSettings: {
                    iconCss: "e-icons e-paste",
                    items: [
                      { text: "Keep Source Format" },
                      { text: "Merge format" },
                      { text: "Keep text only" },
                    ],
                    content: "Paste",
                  },
                },
              ],
            },
            {
              items: [
                {
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    content: "Cut",
                    iconCss: "e-icons e-cut",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    content: "Copy",
                    iconCss: "e-icons e-copy",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    content: "Format Painter",
                    iconCss: "e-icons e-format-painter",
                  },
                },
              ],
            },
          ],
        },
        {
          header: "Font",
          isCollapsible: false,
          enableGroupOverflow: true,
          orientation: ribbon.ItemOrientation.Row,
          groupIconCss: "e-icons e-bold",
          cssClass: "font-group",
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.ComboBox,
                  comboBoxSettings: {
                    dataSource: fontStyle,
                    index: 3,
                    allowFiltering: true,
                    width: "150px",
                  },
                },
                {
                  type: ribbon.RibbonItemType.ComboBox,
                  comboBoxSettings: {
                    dataSource: fontSize,
                    index: 3,
                    width: "65px",
                    allowFiltering: true,
                  },
                },
              ],
            },
            {
              items: [
                {
                  type: ribbon.RibbonItemType.ColorPicker,
                  allowedSizes: ribbon.RibbonItemSize.Small,
                  displayOptions: ribbon.DisplayMode.Simplified,
                  colorPickerSettings: {
                    value: "#123456",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  allowedSizes: ribbon.RibbonItemSize.Small,
                  buttonSettings: {
                    content: "Bold",
                    iconCss: "e-icons e-bold",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  allowedSizes: ribbon.RibbonItemSize.Small,
                  buttonSettings: {
                    content: "Italic",
                    iconCss: "e-icons e-italic",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  allowedSizes: ribbon.RibbonItemSize.Small,
                  buttonSettings: {
                    content: "Underline",
                    iconCss: "e-icons e-underline",
                  },
                },
                {
                  allowedSizes: ribbon.RibbonItemSize.Small,
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    content: "Strikethrough",
                    iconCss: "e-icons e-strikethrough",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  allowedSizes: ribbon.RibbonItemSize.Small,
                  buttonSettings: {
                    content: "Change Case",
                    iconCss: "e-icons e-change-case",
                  },
                },
              ],
            },
          ],
        },
        {
          header: "Editor",
          isCollapsible: false,
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.Button,
                  allowedSizes: ribbon.RibbonItemSize.Large,
                  buttonSettings: {
                    content: "Editor",
                    iconCss: "e-icons e-edit",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: "Insert",
      groups: [
        {
          header: "Tables",
          isCollapsible: false,
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.DropDown,
                  allowedSizes: ribbon.RibbonItemSize.Large,
                  dropDownSettings: {
                    iconCss: "e-icons e-table",
                    content: "Table",
                    items: [
                      { text: "Insert Table" },
                      { text: "Draw Table" },
                      { text: "Convert Table" },
                      { text: "Excel SpreadSheet" },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          id: "illustration",
          header: "Illustrations",
          showLauncherIcon: true,
          orientation: ribbon.ItemOrientation.Row,
          enableGroupOverflow: true,
          groupIconCss: "e-icons e-image",
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    content: "Chart",
                    iconCss: "e-icons e-chart",
                  },
                },
              ],
            },
          ],
        },
        {
          header: "Media",
          isCollapsible: false,
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.Template,
                  itemTemplate: "#itemTemplate",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      header: "View",
      groups: [
        {
          header: "Views",
          groupIconCss: "e-icons e-print",
          orientation: ribbon.ItemOrientation.Row,
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    content: "Print Layout",
                    iconCss: "e-print e-icons",
                  },
                },
                {
                  type: ribbon.RibbonItemType.Button,
                  buttonSettings: {
                    iconCss: "e-icons e-web-layout",
                    content: "Web Layout",
                  },
                },
              ],
            },
          ],
        },
        {
          header: "Show",
          isCollapsible: false,
          collections: [
            {
              items: [
                {
                  type: ribbon.RibbonItemType.CheckBox,
                  checkBoxSettings: {
                    label: "Ruler",
                    checked: false,
                  },
                },
                {
                  type: ribbon.RibbonItemType.CheckBox,
                  checkBoxSettings: {
                    checked: false,
                    label: "Gridlines",
                  },
                },
                {
                  type: ribbon.RibbonItemType.CheckBox,
                  checkBoxSettings: {
                    label: "Navigation Pane",
                    checked: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {
    ribbon.Ribbon.Inject(ribbon.RibbonColorPicker, ribbon.RibbonFileMenu);
    this.topRibbon = new ribbon.Ribbon({ tabs: this.topTabs });
  }

  public appendTo(element: string) {
    this.topRibbon.appendTo(element);
  }
}
