import "../index.css";
import { ReactNode } from "react";

//FUNCTION TO WRAP A BLOCK OF CODE WITH A HEADER
export const BlockWrapper = (props: { title: string; children: ReactNode }) => {
  return (
    <section>
      <h1 className="header">{props.title}</h1>
      {props.children}
    </section>
  );
};
