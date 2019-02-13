// Class: screens.HomeScene

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
function react_native_component_Button() {return require("react-native");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Text() {return require("react-native");}
function react_native_api_StyleSheet() {return require("react-native");}

// Constructor

class HomeScene extends (React_Component().Component) {
	constructor(props) {
		super(props);
		this.state = { };
		this.items = [{ label : "Oneee?", value : "First"},{ label : "twooo", value : "Second"},{ label : "three", value : "Third"}];
	}
	onCategoryPressed(item,index) {
		(tools_NavigationUtils().default).navPush(this,item.value,null);
	}
	renderList() {
		var styles = HomeScene.styles;
		var _g = [];
		var _g2 = 0;
		var _g1 = this.items.length;
		while(_g2 < _g1) {
			var i = _g2++;
			_g.push((React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ key : i, title : this.items[i].label, onPress : (function(a2,a1,f) {
				return function() {
					f[0](a1[0],a2[0]);
				};
			})([i],[this.items[i]],[$bind(this,this.onCategoryPressed)])}));
		}
		return _g;
	}
	componentDidMount() {
	}
	render() {
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : HomeScene.styles.container},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : HomeScene.styles.text},"The navigation menu"),this.renderList());
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

HomeScene.__name__ = ["screens","HomeScene"];
HomeScene.prototype.__class__ = HomeScene.prototype.constructor = $hxClasses["screens.HomeScene"] = HomeScene;

// Init



// Statics

var styles = (react_native_api_StyleSheet().StyleSheet).create({ container : { flex : 1, justifyContent : "center", alignItems : "center"}, text : { fontSize : 20, textAlign : "center", margin : 10}, item : { margin : 30, color : "red"}, itemText : { margin : 30, color : "green"}, button : { }});
var displayName = "HomeScene";

// Export

exports.default = HomeScene;