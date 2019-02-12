// Class: Main

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
var $extend = require("./extend_stub").default;
function React_Component() {return require("react");}
function React() {return require("react");}
function react__$ReactType_ReactType_$Impl_$() {return require("./react/_ReactType/ReactType_Impl_");}
function react_native_component_View() {return require("react-native");}
function Demo() {return require("./Demo");}
function MyApp() {return require("./MyApp");}
function react_native_api_AppRegistry() {return require("react-native");}
function react_native_api_StyleSheet() {return require("react-native");}

// Constructor

class Main extends (React_Component().Component) {
	constructor(props,context) {
		super(props,context);
	}
	render() {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : Main.styles.container},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((Demo().default)),{ }),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((MyApp().default)),{ }));
	}
	static main() {
		(react_native_api_AppRegistry().AppRegistry).registerComponent("Main",function() {
			return (react__$ReactType_ReactType_$Impl_$().default).fromComp(Main);
		});
		(react_native_api_AppRegistry().AppRegistry).registerComponent("Demo",function() {
			return (react__$ReactType_ReactType_$Impl_$().default).fromComp((Demo().default));
		});
		(react_native_api_AppRegistry().AppRegistry).registerComponent("MyApp",function() {
			return (react__$ReactType_ReactType_$Impl_$().default).fromComp((MyApp().default));
		});
		var m = new Main();
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Main.__name__ = ["Main"];
Main.prototype.__class__ = Main.prototype.constructor = $hxClasses["Main"] = Main;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ container : { flex : 1, backgroundColor : "#22FF00", flexDirection : "column", justifyContent : "center", alignItems : "stretch"}});
var displayName = "Main";

// Export

exports.default = Main;