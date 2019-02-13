// Class: Main

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function Register() {return require("./Register");}
function react_native_api_StyleSheet() {return require("react-native");}
function react_native_navigation_Navigation() {return require("react-native-navigation");}

// Constructor

class Main {
	constructor(){}
	static main() {
		(Register().default).registerScreens();
		Main.start();
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static start() {
		Main.setDefaults();
		(react_native_navigation_Navigation().Navigation).events().registerAppLaunchedListener(function() {
			Main.setNavigationStack();
		});
	}
	static setNavigationStack() {
		(react_native_navigation_Navigation().Navigation).setRoot({ root : { sideMenu : { left : { component : { name : "scene.DrawerMenu", passProps : { text : "This is a left side menu screen"}}}, center : { stack : { children : [{ component : { name : "Home", options : { topBar : { visible : false}}}}], options : { layout : { orientation : ["portrait"]}}}}}}});
	}
	static setDefaults() {
	}
}


// Meta

Main.__name__ = ["Main"];
Main.prototype.__class__ = Main.prototype.constructor = $hxClasses["Main"] = Main;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ container : { flex : 1, justifyContent : "center", alignItems : "center", backgroundColor : "#00FFCC"}, text : { fontSize : 20, textAlign : "center", margin : 10}, item : { margin : 30, color : "red"}, itemText : { margin : 30, color : "green"}});

// Export

exports.default = Main;