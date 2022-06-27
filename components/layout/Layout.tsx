import HeadTag from "./head-tag";
import ScriptTag from "./script-tag";
import {ReactNode} from "react";

type Props = {
  children: ReactNode
};

export const Layout = (props: Props) => {
  return (
    <div id="layout-wrapper">
      <HeadTag/>
      {props.children}
      <ScriptTag/>
    </div>
  );
};
