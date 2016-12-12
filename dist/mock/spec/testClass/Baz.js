"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BazParent_1 = require("./BazParent");
var Baz = (function (_super) {
    __extends(Baz, _super);
    function Baz(stringVal, booleanVal, barVal) {
        var _this = _super.call(this, stringVal) || this;
        _this.barVal = barVal;
        _this.booleanVal = booleanVal;
        return _this;
    }
    Baz.prototype.baz = function () {
        return 1000;
    };
    return Baz;
}(BazParent_1.BazParent));
exports.Baz = Baz;
