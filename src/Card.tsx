import React from "react";

type CardProps = {
  title?: string;
  text?: string;
};

export function Card({ title, text }: CardProps) {
  return <section className="Card">{title}</section>;
}
