// Class: react.native.api._Animated.AnimatedValue_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $import = require("./../../../../import_stub").default;
function react_native_api_AnimatedValueImpl() {return require("react-native");}

// Constructor

class AnimatedValue_Impl_ {
	constructor(){}
	static fromFloat(f) {
		return new (react_native_api_AnimatedValueImpl().Animated.Value)(f);
	}
	static toFloat(this1) {
		return this1.__getValue();
	}
}


// Meta

AnimatedValue_Impl_.__name__ = ["react","native","api","_Animated","AnimatedValue_Impl_"];
AnimatedValue_Impl_.prototype.__class__ = AnimatedValue_Impl_.prototype.constructor = $hxClasses["react.native.api._Animated.AnimatedValue_Impl_"] = AnimatedValue_Impl_;

// Init



// Statics



// Export

exports.default = AnimatedValue_Impl_;