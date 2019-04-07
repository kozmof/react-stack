"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDom = require("react-dom");
var Demo_1 = require("./components/Demo");
var trainers = Demo_1.props1.items;
var callPack1 = Demo_1.props1.callPack;
var pokemons = Demo_1.props2.items;
var callPack2 = Demo_1.props2.callPack;
ReactDom.render(React.createElement("div", null,
    React.createElement(Demo_1.IMStackDemo, { items: trainers, callPack: callPack1 }),
    React.createElement(Demo_1.MStackDemo, { items: pokemons, callPack: callPack2 })), document.getElementById("demo"));
