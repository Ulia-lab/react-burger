import { propTypesCard } from "../../utils/prop-types";

export interface CardProps {
  card: propTypesCard;
}

export interface CardsListProps {
  cardsTitle: string;
  cards: propTypesCard[];
}