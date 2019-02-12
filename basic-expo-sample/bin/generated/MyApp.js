// Class: MyApp

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
var $bind = require("./bind_stub").default;
var $extend = require("./extend_stub").default;
function React_Component() {return require("react");}
function React() {return require("react");}
function react__$ReactType_ReactType_$Impl_$() {return require("./react/_ReactType/ReactType_Impl_");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Button() {return require("react-native");}
function react_native_api_StyleSheet() {return require("react-native");}

// Constructor

class MyApp extends (React_Component().Component) {
	constructor(props,context) {
		super(props,context);
	}
	onClick() {
	}
	render() {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ },(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ key : "100001", color : "green", title : "Hello You", onPress : $bind(this,this.onClick)}));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

MyApp.__name__ = ["MyApp"];
MyApp.prototype.__class__ = MyApp.prototype.constructor = $hxClasses["MyApp"] = MyApp;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ container : { flex : 1, flexDirection : "row", justifyContent : "flex-start", alignItems : "stretch", backgroundColor : "#4478", padding : 20}});
var displayName = "MyApp";

// Export

exports.default = MyApp;