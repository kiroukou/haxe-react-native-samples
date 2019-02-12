// Class: react._ReactType.ReactType_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

class ReactType_Impl_ {
	constructor(){}
	static fromComp(cls) {
		if(cls == null) {
			return ReactType_Impl_.isNull();
		}
		if(cls.__jsxStatic != null) {
			return cls.__jsxStatic;
		}
		return cls;
	}
	static isNull() {
		window.console.error("Runtime value for ReactType is null." + " Something may be wrong with your externs.");
		return "div";
	}
}


// Meta

ReactType_Impl_.__name__ = ["react","_ReactType","ReactType_Impl_"];
ReactType_Impl_.prototype.__class__ = ReactType_Impl_.prototype.constructor = $hxClasses["react._ReactType.ReactType_Impl_"] = ReactType_Impl_;

// Init



// Statics



// Export

exports.default = ReactType_Impl_;