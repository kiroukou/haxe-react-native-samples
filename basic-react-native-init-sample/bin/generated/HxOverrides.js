// Class: HxOverrides

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;

// Constructor

class HxOverrides {
	constructor(){}
	static iter(a) {
		return { cur : 0, arr : a, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	}
}


// Meta

HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.prototype.__class__ = HxOverrides.prototype.constructor = $hxClasses["HxOverrides"] = HxOverrides;

// Init



// Statics



// Export

exports.default = HxOverrides;