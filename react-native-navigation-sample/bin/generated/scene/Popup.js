// Class: scene.Popup

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
var $extend = require("./../extend_stub").default;
function React_Component() {return require("react");}
function React() {return require("react");}
function react__$ReactType_ReactType_$Impl_$() {return require("./../react/_ReactType/ReactType_Impl_");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Text() {return require("react-native");}
function react_native_api_StyleSheet() {return require("react-native");}

// Constructor

class Popup extends (React_Component().Component) {
	constructor(props) {
		super(props);
	}
	render() {
		var styles = Popup.styles;
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : styles.view},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : styles.text},this.props.message));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Popup.__name__ = ["scene","Popup"];
Popup.prototype.__class__ = Popup.prototype.constructor = $hxClasses["scene.Popup"] = Popup;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ view : { height : "50%", flexDirection : "column", alignItems : "stretch", justifyContent : "center"}, text : { height : 50, backgroundColor : "steelblue"}});
var displayName = "Popup";

// Export

exports.default = Popup;