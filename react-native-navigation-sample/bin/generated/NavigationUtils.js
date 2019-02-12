// Class: NavigationUtils

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $import = require("./import_stub").default;
function react_native_navigation_Navigation() {return require("react-native-navigation");}
function haxe_Timer() {return require("./haxe/Timer");}

// Constructor

class NavigationUtils {
	constructor(){}
	static navPop(comp) {
		(react_native_navigation_Navigation().Navigation).pop(comp.props.componentId);
	}
	static navPush(comp,route,propsToPass,options) {
		console.log(options);
		console.log(JSON.stringify(options));
		(react_native_navigation_Navigation().Navigation).push(comp.props.componentId,{ component : { name : route, passProps : propsToPass, options : options}});
	}
	static navDismissModal(comp) {
		(react_native_navigation_Navigation().Navigation).dismissModal(comp.props.componentId);
	}
	static navModalAsOverlay(comp,route,propsToPass,options) {
		var overlayOptions_layout = { backgroundColor : "transparent"};
		var overlayOptions_modalPresentationStyle = "overCurrentContext";
		var overlayOptions_animations = { showModal : { enabled : false, waitForRender : false}, dismissModal : { enabled : false}};
		(react_native_navigation_Navigation().Navigation).showModal({ component : { name : route, passProps : propsToPass, options : options}});
		(haxe_Timer().default).delay(function() {
			(react_native_navigation_Navigation().Navigation).dismissAllModals({ animations : { dismissModal : { enabled : false, waitForRender : true}}});
		},2000);
	}
	static navShowOverlay(comp,route,propsToPass,options) {
		(react_native_navigation_Navigation().Navigation).showOverlay({ component : { name : route, passProps : propsToPass, options : options}});
		if(options != null) {
			(react_native_navigation_Navigation().Navigation).mergeOptions(comp.props.componentId,options);
		}
	}
	static navDismissOverlay(comp) {
		(react_native_navigation_Navigation().Navigation).dismissOverlay(comp.props.componentId);
	}
	static get defaultOptions() { return defaultOptions; }
	static set defaultOptions(value) { defaultOptions = value; }
}


// Meta

NavigationUtils.__name__ = ["NavigationUtils"];
NavigationUtils.prototype.__class__ = NavigationUtils.prototype.constructor = $hxClasses["NavigationUtils"] = NavigationUtils;

// Init



// Statics

var defaultOptions = { layout : { componentBackgroundColor : "#e8e8e8", orientation : ["portrait"]}, topBar : { backButton : { showTitle : false}}, animations : { setRoot : { alpha : { from : 0, to : 1, duration : 300}}, push : { waitForRender : true, enabled : true, content : { y : { from : 1000, to : 0, duration : 500, interpolation : "accelerate"}, alpha : { from : 0, to : 1, duration : 500, interpolation : "accelerate"}}}, pop : { waitForRender : false, enabled : false, topBar : { id : "TEST", alpha : { from : 1, to : 0, duration : 500, interpolation : "accelerate"}}, content : { y : { from : 0, to : 1000, duration : 500, interpolation : "decelerate"}, alpha : { from : 1, to : 0, duration : 500, interpolation : "decelerate"}}}}};

// Export

exports.default = NavigationUtils;