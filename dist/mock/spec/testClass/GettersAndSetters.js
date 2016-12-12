"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ParentGettersAndSetters = (function () {
    function ParentGettersAndSetters() {
    }
    Object.defineProperty(ParentGettersAndSetters.prototype, "prop0", {
        get: function () {
            return this._prop0;
        },
        set: function (v) {
            if (typeof v === 'function') {
                throw new Error('Trying to set jasmine spy of Parent');
            }
            this._prop0 = v;
        },
        enumerable: true,
        configurable: true
    });
    return ParentGettersAndSetters;
}());
var GettersAndSetters = (function (_super) {
    __extends(GettersAndSetters, _super);
    function GettersAndSetters() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GettersAndSetters.prototype, "prop1", {
        get: function () {
            return this._prop1;
        },
        set: function (v) {
            if (typeof v === 'function') {
                throw new Error('Trying to set jasmine spy');
            }
            this._prop1 = v;
        },
        enumerable: true,
        configurable: true
    });
    return GettersAndSetters;
}(ParentGettersAndSetters));
exports.GettersAndSetters = GettersAndSetters;
