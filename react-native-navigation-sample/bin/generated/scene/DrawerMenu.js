// Class: scene.DrawerMenu

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
function CustomButton() {return require("./../CustomButton");}
function react_native_api_StyleSheet() {return require("react-native");}

// Constructor

class DrawerMenu extends (React_Component().Component) {
	constructor(p) {
		super(p);
	}
	render() {
		var styles = DrawerMenu.styles;
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : styles.view},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ },this.props.text),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromFunctionWithProps((CustomButton().default).render),{ text : "Home"}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromFunctionWithProps((CustomButton().default).render),{ text : "Blablabla"}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromFunctionWithProps((CustomButton().default).render),{ text : "Favoris"}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromFunctionWithProps((CustomButton().default).render),{ text : "Mon Compte"}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromFunctionWithProps((CustomButton().default).render),{ text : "Réglages"}));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

DrawerMenu.__name__ = ["scene","DrawerMenu"];
DrawerMenu.prototype.__class__ = DrawerMenu.prototype.constructor = $hxClasses["scene.DrawerMenu"] = DrawerMenu;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ view : { height : "50%", flexDirection : "column", alignItems : "stretch", justifyContent : "center"}});
var displayName = "DrawerMenu";

// Export

exports.default = DrawerMenu;