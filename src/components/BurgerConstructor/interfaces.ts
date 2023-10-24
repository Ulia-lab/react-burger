import { ReactNode } from "react";
import { propTypesCard } from "../../utils/prop-types";

type ElementType = "top" | "bottom" | undefined;

export interface ConstructorCardProps {
  type: ElementType,
  index?: string,
  card: propTypesCard;
  isLocked?: boolean,
  additionalName?: string,
}
export interface DropZoneProps {
  index: string,
  children: ReactNode,
}
