import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      headerBg: string;
      backgroundColor: string;
      smallText: string;
      itemBg: string;
      ui: string;
      text: string;
      body: string;
      component: string;
      secondaryText: string;
    };
  }
}
