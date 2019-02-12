// Class: haxe.Timer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;

// Constructor

class Timer {
	constructor(time_ms) {
		var me = this;
		this.id = setInterval(function() {
			me.run();
		},time_ms);
	}
	stop() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	run() {
	}
	static delay(f,time_ms) {
		var t = new Timer(time_ms);
		t.run = function() {
			t.stop();
			f();
		};
		return t;
	}
}


// Meta

Timer.__name__ = ["haxe","Timer"];
Timer.prototype.__class__ = Timer.prototype.constructor = $hxClasses["haxe.Timer"] = Timer;

// Init



// Statics



// Export

exports.default = Timer;