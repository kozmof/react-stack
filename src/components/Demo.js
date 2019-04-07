"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Stack_1 = require("./Stack");
var Trainer = /** @class */ (function () {
    function Trainer(id, name, place) {
        this.id = id;
        this.name = name;
        this.place = place;
    }
    return Trainer;
}());
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name) {
        this.id = id;
        this.name = name;
    }
    return Pokemon;
}());
exports.props1 = {
    items: [new Trainer(0, "Red", "Mt. Silver"), new Trainer(1, "Kasumi", "Hanada City"), new Trainer(2, "Green", "Unknown")]
};
var IMStackDemo = /** @class */ (function (_super) {
    __extends(IMStackDemo, _super);
    function IMStackDemo(props) {
        return _super.call(this, props, {}) || this;
    }
    IMStackDemo.prototype.callPack = function () {
        return function (item) {
            return (React.createElement("tr", { key: item.id },
                React.createElement("td", null,
                    "Name: ",
                    item.name),
                React.createElement("td", null,
                    "Place: ",
                    item.place),
                React.createElement("td", null,
                    React.createElement("button", { onClick: function () { return console.log("!"); } }, "!"))));
        };
    };
    return IMStackDemo;
}(Stack_1.IMStack));
exports.IMStackDemo = IMStackDemo;
var MStackDemo = /** @class */ (function (_super) {
    __extends(MStackDemo, _super);
    function MStackDemo() {
        return _super.call(this, {}, { items: [new Pokemon(1, "Bulbasaur"), new Pokemon(4, "Charmander"), new Pokemon(7, "Squirtle")] }) || this;
    }
    MStackDemo.prototype.callPack = function () {
        var _this = this;
        var remove = function (id) {
            for (var n = 0; n < _this.state.items.length; n++) {
                if (_this.state.items[n].id === id) {
                    _this.state.items.splice(n, 1);
                    return;
                }
            }
        };
        return function (item) {
            return (React.createElement("tr", { key: item.id },
                React.createElement("td", null,
                    "Name: ",
                    item.name),
                React.createElement("td", null,
                    React.createElement("button", { onClick: function () { return remove(item.id); } }, "!"))));
        };
    };
    return MStackDemo;
}(Stack_1.MStack));
exports.MStackDemo = MStackDemo;
