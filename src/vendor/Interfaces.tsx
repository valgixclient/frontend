import { CSSProperties, ReactNode } from "react";

export interface Loader {
    title: string;
}

export interface ButtonI {
    styleType: string;
    children?: ReactNode;
    onClick?: ReactNode;
    style?: CSSProperties | undefined;
}