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
function react_native_component_Text() {return require("react-native");}
function react_native_api_AppRegistry() {return require("react-native");}
function Register() {return require("./Register");}
function react_native_api_StyleSheet() {return require("react-native");}
function react_native_navigation_Navigation() {return require("react-native-navigation");}
function tools_NavigationUtils() {return require("./tools/NavigationUtils");}

// Constructor

class Main extends (React_Component().Component) {
	constructor(props,context) {
		super(props,context);
	}
	render() {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ },(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ },"React native App Sample"));
	}
	static main() {
		(react_native_api_AppRegistry().AppRegistry).registerComponent("Main",function() {
			return (react__$ReactType_ReactType_$Impl_$().default).fromComp(Main);
		});
		(Register().default).registerScreens();
		Main.start();
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static start() {
		(react_native_navigation_Navigation().Navigation).events().registerAppLaunchedListener(function() {
			Main.setDefaults();
			Main.setNavigationStack();
		});
	}
	static setNavigationStack() {
		(react_native_navigation_Navigation().Navigation).setRoot({ root : { sideMenu : { left : { component : { name : "scene.DrawerMenu", passProps : { text : "This is a left side menu screen"}}}, center : { stack : { children : [{ component : { name : "Home", options : { topBar : { visible : false}}}}], options : { layout : { orientation : ["portrait"]}}}}}}});
	}
	static setDefaults() {
		(react_native_navigation_Navigation().Navigation).setDefaultOptions((tools_NavigationUtils().default).defaultOptions);
	}
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Main.__name__ = ["Main"];
Main.prototype.__class__ = Main.prototype.constructor = $hxClasses["Main"] = Main;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ container : { flex : 1, justifyContent : "center", alignItems : "center", backgroundColor : "#00FFCC"}, text : { fontSize : 20, textAlign : "center", margin : 10}, item : { margin : 30, color : "red"}, itemText : { margin : 30, color : "green"}});
var displayName = "Main";

// Export

exports.default = Main;