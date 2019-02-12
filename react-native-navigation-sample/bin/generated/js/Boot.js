// Class: js.Boot

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;

// Constructor

class Boot {
	constructor(){}
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		var t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(o instanceof Array) {
				if(o.__enum__) {
					if(o.length == 2) {
						return o[0];
					}
					var str = o[0] + "(";
					s += "\t";
					var _g1 = 2;
					var _g = o.length;
					while(_g1 < _g) {
						var i = _g1++;
						if(i != 2) {
							str += "," + Boot.__string_rec(o[i],s);
						} else {
							str += Boot.__string_rec(o[i],s);
						}
					}
					return str + ")";
				}
				var l = o.length;
				var i1;
				var str1 = "[";
				s += "\t";
				var _g11 = 0;
				var _g2 = l;
				while(_g11 < _g2) {
					var i2 = _g11++;
					str1 += (i2 > 0 ? "," : "") + Boot.__string_rec(o[i2],s);
				}
				str1 += "]";
				return str1;
			}
			var tostr;
			try {
				tostr = o.toString;
			} catch( e ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				var s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			var k = null;
			var str2 = "{\n";
			s += "\t";
			var hasp = o.hasOwnProperty != null;
			for( var k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue;
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue;
			}
			if(str2.length != 2) {
				str2 += ", \n";
			}
			str2 += s + k + " : " + Boot.__string_rec(o[k],s);
			}
			s = s.substring(1);
			str2 += "\n" + s + "}";
			return str2;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}


// Meta

Boot.__name__ = ["js","Boot"];
Boot.prototype.__class__ = Boot.prototype.constructor = $hxClasses["js.Boot"] = Boot;

// Init



// Statics



// Export

exports.default = Boot;