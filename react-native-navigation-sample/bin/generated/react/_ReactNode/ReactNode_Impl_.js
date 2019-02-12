// Class: react._ReactNode.ReactNode_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

class ReactNode_Impl_ {
	constructor(){}
	static fromString(s) {
		if(s == null) {
			return ReactNode_Impl_.isNull();
		}
		return s;
	}
	static fromFunction(f) {
		if(f == null) {
			return ReactNode_Impl_.isNull();
		}
		return f;
	}
	static fromFunctionWithProps(f) {
		if(f == null) {
			return ReactNode_Impl_.isNull();
		}
		return f;
	}
	static fromComp(cls) {
		if(cls == null) {
			return ReactNode_Impl_.isNull();
		}
		if(cls.__jsxStatic != null) {
			return cls.__jsxStatic;
		}
		return cls;
	}
	static isNull() {
		window.console.error("Runtime value for ReactNode is null." + " Something may be wrong with your externs.");
		return "div";
	}
}


// Meta

ReactNode_Impl_.__name__ = ["react","_ReactNode","ReactNode_Impl_"];
ReactNode_Impl_.prototype.__class__ = ReactNode_Impl_.prototype.constructor = $hxClasses["react._ReactNode.ReactNode_Impl_"] = ReactNode_Impl_;

// Init



// Statics



// Export

exports.default = ReactNode_Impl_;