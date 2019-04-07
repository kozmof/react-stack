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
var IMStack = /** @class */ (function (_super) {
    __extends(IMStack, _super);
    function IMStack(props, initial_state) {
        var _this = _super.call(this, props) || this;
        _this.state = initial_state;
        _this.callPack.bind(_this);
        return _this;
    }
    IMStack.prototype.render = function () {
        var items = this.props.items || [];
        var rows = items.map(this.callPack());
        return (React.createElement("table", null,
            React.createElement("tbody", null, rows)));
    };
    return IMStack;
}(React.Component));
exports.IMStack = IMStack;
var MStack = /** @class */ (function (_super) {
    __extends(MStack, _super);
    function MStack(props, initial_state) {
        var _this = _super.call(this, props) || this;
        _this.state = initial_state;
        _this.callPack.bind(_this);
        return _this;
    }
    MStack.prototype.render = function () {
        var rows = this.state.items.map(this.callPack());
        return (React.createElement("table", null,
            React.createElement("tbody", null, rows)));
    };
    return MStack;
}(React.Component));
exports.MStack = MStack;
