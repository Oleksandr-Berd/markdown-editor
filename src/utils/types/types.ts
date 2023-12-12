import { StringLiteralLike } from "typescript";

export type HeaderProps = {
  docName: string | null;
  toggleSideBar: () => void;
  isSideBar: boolean;
  specificName: string | null;
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
  typeName: "save" | "delete" | "switcher" | "add" | "draft" | undefined;
  handle: () => void;
  isEdit: boolean;
  specificName: string | null;
};

export type NewDocType = {
  handleDraft:  (values: { name: string; content: string }) => void;
};