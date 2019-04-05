import * as React from "react";
import * as ReactDom from "react-dom";
import { props, StackDemo } from "./components/Demo";

const { items, mapCallback } = props

ReactDom.render(
  <StackDemo items={items} mapCallback={mapCallback} />,
  document.getElementById("demo")
);
