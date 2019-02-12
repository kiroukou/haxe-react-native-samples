// Class: screens.Scene3

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../hxClasses_stub").default;
var $import = require("./../import_stub").default;
var $bind = require("./../bind_stub").default;
var $extend = require("./../extend_stub").default;
function React_Component() {return require("react");}
function tools_NavigationUtils() {return require("./../tools/NavigationUtils");}
function React() {return require("react");}
function react__$ReactType_ReactType_$Impl_$() {return require("./../react/_ReactType/ReactType_Impl_");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Text() {return require("react-native");}
function react_native_component_Button() {return require("react-native");}
function Main() {return require("./../Main");}

// Constructor

class Scene3 extends (React_Component().Component) {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	closeModale() {
		(tools_NavigationUtils().default).navDismissModal(this);
	}
	goBack() {
		(tools_NavigationUtils().default).navPop(this);
	}
	render() {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : Scene3.styles.container},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : Scene3.styles.text},"This is Scene3"),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ title : "Back", onPress : $bind(this,this.goBack)}));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get navigatorButtons() { return navigatorButtons; }
	static set navigatorButtons(value) { navigatorButtons = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Scene3.__name__ = ["screens","Scene3"];
Scene3.prototype.__class__ = Scene3.prototype.constructor = $hxClasses["screens.Scene3"] = Scene3;

// Init



// Statics

var styles = (Main().default).styles;
var navigatorButtons = { leftButtons : [{ id : "null"}], rightButtons : [{ id : "close-btn"}]};
var displayName = "Scene3";

// Export

exports.default = Scene3;