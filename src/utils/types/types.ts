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
        createdAt: string;
        _id:string;
      } 
      
    |  undefined;
};

type Content = {
  content: string;
  name: string;
  createdAt: string;
  _id: string;
};

export type AllContent = {
  allContent: Content[];
};

export type ButtonType = {
  icon: string;
  typeName: "save" | "delete" | "switcher" | "add" | undefined;
};