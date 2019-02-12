// Class: Demo

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
function lib_lodash_Debounce() {return require("lodash.debounce");}
function react_native_api_StyleSheet() {return require("react-native");}
function lib_lodash_Throttle() {return require("lodash.throttle");}

// Constructor

class Demo extends (React_Component().Component) {
	constructor(props,context) {
		super(props,context);
	}
	render() {
		var styles = Demo.styles;
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : styles.container},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ key : "0", color : "blue", title : "Click Me Throttled", onPress : Demo.onClickThrottled}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ key : "1", color : "black", title : "Debounced click", onPress : $bind(this,this.onClickDebounced)}));
	}
	__undebounced_onClickDebounced() {
		console.log("click debounced");
	}
	onClickDebounced() {
		if(this.debounced_onClickDebounced == null) {
			this.debounced_onClickDebounced = (lib_lodash_Debounce())($bind(this,this.__undebounced_onClickDebounced),1000,{ trailing : true});
		}
		this.debounced_onClickDebounced();
		return;
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
	static __unthrottled_onClickThrottled() {
		console.log("click throttled");
	}
	static onClickThrottled() {
		if(Demo.throttled_onClickThrottled == null) {
			Demo.throttled_onClickThrottled = (lib_lodash_Throttle())(Demo.__unthrottled_onClickThrottled,1000);
		}
		Demo.throttled_onClickThrottled();
		return;
	}
}


// Meta

Demo.__name__ = ["Demo"];
Demo.prototype.__class__ = Demo.prototype.constructor = $hxClasses["Demo"] = Demo;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ container : { justifyContent : "center", backgroundColor : "green"}, text : { fontSize : 20, textAlign : "center", margin : 10}});
var displayName = "Demo";

// Export

exports.default = Demo;