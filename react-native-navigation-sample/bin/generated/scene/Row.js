// Class: scene.Row

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
function react_native_component_TouchableHighlight() {return require("react-native");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Text() {return require("react-native");}
function react_native_api_StyleSheet() {return require("react-native");}

// Constructor

class Row extends (React_Component().Component) {
	constructor(props) {
		super(props);
	}
	render() {
		var styles = Row.styles;
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_TouchableHighlight().TouchableHighlight)),{ onPress : this.props.onPress, onPressIn : this.props.onPressIn, underlayColor : "#555555"},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : styles.row},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : styles.text},this.props.title)));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Row.__name__ = ["scene","Row"];
Row.prototype.__class__ = Row.prototype.constructor = $hxClasses["scene.Row"] = Row;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ row : { height : 48, width : 1, paddingHorizontal : 16, flexDirection : "row", alignItems : "center", justifyContent : "center", borderBottomWidth : 1, borderBottomColor : "green"}, text : { fontSize : 16}});
var displayName = "Row";

// Export

exports.default = Row;