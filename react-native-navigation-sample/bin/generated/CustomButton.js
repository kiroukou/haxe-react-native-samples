// Class: CustomButton

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function react_native_api_StyleSheet() {return require("react-native");}
function React() {return require("react");}
function react__$ReactType_ReactType_$Impl_$() {return require("./react/_ReactType/ReactType_Impl_");}
function react_native_component_TouchableOpacity() {return require("react-native");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Text() {return require("react-native");}

// Constructor

class CustomButton {
	constructor(){}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static render(props) {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_TouchableOpacity().TouchableOpacity)),{ style : CustomButton.styles.button},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : CustomButton.styles.button},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : { color : "black"}},props.text)));
	}
	static get __jsxStatic() { return __jsxStatic; }
	static set __jsxStatic(value) { __jsxStatic = value; }
}


// Meta

CustomButton.__name__ = ["CustomButton"];
CustomButton.prototype.__class__ = CustomButton.prototype.constructor = $hxClasses["CustomButton"] = CustomButton;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ button : { overflow : "hidden", width : 120, height : 40, borderRadius : 10, justifyContent : "center", alignItems : "center", backgroundColor : "green", margin : 10}});
var __jsxStatic = CustomButton.render;

// Export

exports.default = CustomButton;