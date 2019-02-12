// Class: Register

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function react_native_navigation_Navigation() {return require("react-native-navigation");}
function screens_HomeScene() {return require("./screens/HomeScene");}
function screens_Scene1() {return require("./screens/Scene1");}
function screens_Scene2() {return require("./screens/Scene2");}
function screens_Scene3() {return require("./screens/Scene3");}
function comps_Popup() {return require("./comps/Popup");}
function comps_DrawerMenu() {return require("./comps/DrawerMenu");}

// Constructor

class Register {
	constructor(){}
	static registerScreens() {
		(react_native_navigation_Navigation().Navigation).registerComponent("Home",function() {
			return (screens_HomeScene().default)
		});
		(react_native_navigation_Navigation().Navigation).registerComponent("First",function() {
			return (screens_Scene1().default)
		});
		(react_native_navigation_Navigation().Navigation).registerComponent("Second",function() {
			return (screens_Scene2().default)
		});
		(react_native_navigation_Navigation().Navigation).registerComponent("Third",function() {
			return (screens_Scene3().default)
		});
		(react_native_navigation_Navigation().Navigation).registerComponent("Popup",function() {
			return (comps_Popup().default)
		});
		(react_native_navigation_Navigation().Navigation).registerComponent("scene.DrawerMenu",function() {
			return (comps_DrawerMenu().default)
		});
	}
}


// Meta

Register.__name__ = ["Register"];
Register.prototype.__class__ = Register.prototype.constructor = $hxClasses["Register"] = Register;

// Init



// Statics



// Export

exports.default = Register;