"use strict";
var Mock_1 = require("./Mock");
var _ = require("lodash");
var MockBuilder = (function () {
    function MockBuilder(callConstructor) {
        this.callConstructor = callConstructor;
    }
    MockBuilder.prototype.withCallConstructor = function (callConstructor) {
        this.callConstructor = callConstructor;
        return this;
    };
    MockBuilder.prototype.createInstance = function (Ctor, args) {
        var instance = this.createMockInstance(Ctor, args);
        return new Mock_1.Mock(instance, args);
    };
    MockBuilder.prototype.createMockInstance = function (Ctor, args) {
        var callConstructor = this.callConstructor;
        var MockImplementation = (function () {
            function MockImplementation(mockImplementationArgs) {
                if (callConstructor) {
                    Ctor.apply(this, mockImplementationArgs);
                }
            }
            return MockImplementation;
        }());
        MockImplementation.prototype = Object.create(Ctor.prototype);
        MockImplementation.prototype.constructor = MockImplementation;
        for (var prototypeKey in MockImplementation.prototype) {
            this.mockGetterAndSetter(Ctor.prototype, prototypeKey);
            MockImplementation.prototype[prototypeKey] = jasmine.createSpy(prototypeKey);
        }
        var instance = new MockImplementation(args ? _.toArray(args.arguments) : null);
        MockBuilder.setDefaultVals(instance, args);
        return instance;
    };
    MockBuilder.prototype.mockGetterAndSetter = function (classPrototype, prototypeKey) {
        var oldDescriptor = Object.getOwnPropertyDescriptor(classPrototype, prototypeKey);
        if (oldDescriptor && (oldDescriptor.get || oldDescriptor.set)) {
            Object.defineProperty(classPrototype, prototypeKey, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: undefined
            });
        }
        console.log(classPrototype);
        console.log(classPrototype.constructor.toString().substr(0, 50));
        console.log(classPrototype.constructor.prototype);
        console.log('------------');
        if (classPrototype.constructor && classPrototype !== classPrototype.constructor.prototype) {
            console.log('aaaaaaa');
            this.mockGetterAndSetter(classPrototype.constructor.prototype, prototypeKey);
        }
    };
    MockBuilder.setDefaultVals = function (object, args) {
        _.each(object, function (value, key) {
            if (!_.isFunction(value) && !MockBuilder.argsHasProperty(args, key)) {
                object[key] = MockBuilder.createDefaultValue(typeof value);
            }
        });
    };
    MockBuilder.argsHasProperty = function (args, key) {
        return !!args && args.arguments.hasOwnProperty(key);
    };
    MockBuilder.createDefaultValue = function (type) {
        switch (type) {
            case "string":
                return "";
            case "number":
                return 0;
            case "boolean":
                return false;
            case "object":
                return {};
            default:
                return undefined;
        }
    };
    return MockBuilder;
}());
exports.MockBuilder = MockBuilder;
