import { ReactNode } from "react";

export type HeaderProps = {
  docName: string | null;
  toggleSideBar: () => void;
  isSideBar: boolean;
};

export type ContentType = {
  defaultContent:
    | {
        content: string;
        name: string;
      }
    | undefined;
};

export type ButtonType = {
  icon: string;
  typeName: "save" | "delete" | "switcher" | "add" | undefined;
  children?: ReactNode;
};