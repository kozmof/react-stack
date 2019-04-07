import * as React from "react";
import * as ReactDom from "react-dom";
import { props, IMStackDemo, MStackDemo } from "./components/Demo";

ReactDom.render(
  <div>
    <p> Immutable Stack</p>
    <IMStackDemo items={props.items}/>
    <p> Mutable Stack</p>
    <MStackDemo />
  </div> ,
  document.getElementById("demo")
);
