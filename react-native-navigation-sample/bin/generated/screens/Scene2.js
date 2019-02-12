// Class: screens.Scene2

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

class Scene2 extends (React_Component().Component) {
	constructor(props) {
		super(props);
	}
	goBack() {
		(tools_NavigationUtils().default).navPop(this);
	}
	goFirstScreen() {
		(tools_NavigationUtils().default).navPush(this,"First",{ text : "Coucou"},{ topBar : { backButton : { showTitle : false}, title : { text : "Iam the king", color : "pink"}}, animations : { setRoot : { alpha : { to : 1, duration : 300, from : 0}}, pop : { topBar : { id : "TEST", alpha : { interpolation : "accelerate", to : 0, duration : 500, from : 1}}, enabled : false, waitForRender : false, content : { alpha : { interpolation : "decelerate", to : 0, duration : 500, from : 1}, y : { interpolation : "decelerate", to : 1000, duration : 500, from : 0}}}, push : { enabled : true, waitForRender : true, content : { alpha : { interpolation : "accelerate", to : 1, duration : 500, from : 0}, y : { interpolation : "accelerate", to : 0, duration : 500, from : 1000}}}}, layout : { orientation : ["portrait"], componentBackgroundColor : "#e8e8e8"}});
	}
	render() {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : Scene2.styles.container},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : Scene2.styles.text},"This is Scene2"),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ title : "Back", onPress : $bind(this,this.goBack)}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ title : "Goto First screen", onPress : $bind(this,this.goFirstScreen)}));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Scene2.__name__ = ["screens","Scene2"];
Scene2.prototype.__class__ = Scene2.prototype.constructor = $hxClasses["screens.Scene2"] = Scene2;

// Init



// Statics

var styles = (Main().default).styles;
var displayName = "Scene2";

// Export

exports.default = Scene2;