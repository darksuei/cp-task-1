import "../index.css";
import { ReactNode } from "react";
const BlockWrapper = (props: { title: string; children: ReactNode }) => {
  return (
    <section>
      <h1 className="header">{props.title}</h1>
      {props.children}
    </section>
  );
};
export default BlockWrapper;
