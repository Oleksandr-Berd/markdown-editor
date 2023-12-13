import { MouseEventHandler } from "react";

export type HeaderProps = {
  docName: string | null;
  toggleSideBar: () => void;
  isSideBar: boolean;
  specificName: string | null;
  toggleModal: ()=> void;
};

export type ContentType = {
  defaultContent:
    | {
        content: string;
        name: string;
        createdAt: string;
        _id: string;
      }
    | undefined;
};

export type Content = {
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
  typeName:
    | "save"
    | "delete"
    | "switcher"
    | "add"
    | "confirmDelete"
    | undefined;
  handle?: MouseEventHandler<HTMLButtonElement>;
  handleDelete: (name: string) => void;
  isEdit: boolean;
  specificName: string | null;
  locationPage: string | undefined;
};

export type NewDocType = {
  isSideBar: boolean;
};