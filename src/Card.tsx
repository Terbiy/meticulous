import React from "react";

type CardProps = {
  title?: string;
  text?: string;
};

export function Card({ title, text }: CardProps) {
  if (!(title || text)) return null;

  return (
    <section className="Card">
      <h2 className="Card__Title">{title}</h2>
      <p className="Card__Text">{text}</p>
    </section>
  );
}
