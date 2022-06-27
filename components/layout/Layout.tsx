import HeadTag from "./head-tag";
import ScriptTag from "./script-tag";
import {ReactElement} from "react";

type Props = {
  children: Element | ReactElement
};

export const Layout = (props: Props) => {
  return (
    <>
      <HeadTag/>
      {props.children}
      <ScriptTag/>
    </>
  );
};
