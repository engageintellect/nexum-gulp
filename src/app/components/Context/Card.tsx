import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

export interface ICard {
  pageContent: string;
  metadata: {
    hash: string;
  };
}

interface ICardProps {
  card: ICard;
  selected: string[] | null;
}

export const Card: FC<ICardProps> = ({ card, selected }) => (
  <div
    id={card.metadata.hash}
    className={`card w-full rounded-lg p-5 m-2 text-white ${
      selected && selected.includes(card.metadata.hash)
        ? "bg-zinc-600"
        : "bg-zinc-800"
    } ${
      selected && selected.includes(card.metadata.hash)
        ? "border-double border-4 border-sky-500"
        : "opacity-60 hover:opacity-80 transition-opacity duration-300 ease-in-out"
    }`}
  >
    <ReactMarkdown>{card.pageContent}</ReactMarkdown>
    {/* <div className="text-xs mt-2">{card.metadata.hash}</div> */}
  </div>
);
