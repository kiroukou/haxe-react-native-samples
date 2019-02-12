// Class: screens.Scene1

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
function comps_Row() {return require("./../comps/Row");}
function react_native_component_Text() {return require("react-native");}
function react_native_component_View() {return require("react-native");}
function react_native_component_Button() {return require("react-native");}
function react_native_component_FlatList() {return require("react-native");}
function Main() {return require("./../Main");}

// Constructor

class Scene1 extends (React_Component().Component) {
	constructor(props) {
		super(props);
		var id = 0;
		var _g = [];
		var _g1 = 0;
		while(_g1 < 100) {
			var i = _g1++;
			_g.push("Toto_" + i);
		}
		this.data = _g.map(function(o) {
			id += 1;
			return { id : id - 1, key : o};
		});
	}
	componentDidAppear() {
		console.log("appeared");
	}
	onPressed(o,validated) {
		if(!validated) {
			return;
		}
		(tools_NavigationUtils().default).navModalAsOverlay(this,"Popup",{ message : "This Overlay screen to display my value " + o.key},{ topBar : { title : { color : "red", text : "Modale en overlay"}}});
	}
	renderItem(o) {
		var f = $bind(this,this.onPressed);
		var o1 = o.item;
		var rowProps = function() {
			f(o1,true);
		};
		var f1 = $bind(this,this.onPressed);
		var o2 = o.item;
		var rowProps1 = { onPress : rowProps, onPressIn : function() {
			f1(o2,false);
		}, title : o.item.key};
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((comps_Row().default)),rowProps1);
	}
	keyExtractor(o,index) {
		return o.id + "";
	}
	goBack() {
		(tools_NavigationUtils().default).navPop(this);
	}
	render() {
		var msg = this.props.text != null ? (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ },this.props.text) : null;
		return (React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_View().View)),{ style : Scene1.styles.container},(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Text().Text)),{ style : Scene1.styles.text},"This is Scene1",msg),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_Button().Button)),{ title : "Back Link", onPress : $bind(this,this.goBack)}),(React()).createElement((react__$ReactType_ReactType_$Impl_$().default).fromComp((react_native_component_FlatList().FlatList)),{ data : this.data, renderItem : $bind(this,this.renderItem), keyExtractor : $bind(this,this.keyExtractor)}));
	}
	static get styles() { return styles; }
	static set styles(value) { styles = value; }
	static get displayName() { return displayName; }
	static set displayName(value) { displayName = value; }
}


// Meta

Scene1.__name__ = ["screens","Scene1"];
Scene1.prototype.__class__ = Scene1.prototype.constructor = $hxClasses["screens.Scene1"] = Scene1;

// Init



// Statics

var styles = (Main().default).styles;
var displayName = "Scene1";

// Export

exports.default = Scene1;