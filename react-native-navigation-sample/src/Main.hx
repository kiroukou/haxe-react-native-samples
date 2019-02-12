package;

import screens.*;
import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.api.StyleSheet;
import react.native.api.AppRegistry;
import react.native.component.*;
import react.native.navigation.Navigation;

class Main {

	// override function render() { return jsx('<View><Text>React native App Sample</Text></View>'); }

	public static function main() {
		// AppRegistry.registerComponent('Main', function() return Main);
		Register.registerScreens();
		start();
	}

	static var menuTabs:Array<{
		id:String,
		?icon:Dynamic,
		?selectedIcon:Dynamic,
		screen:String,
		?component:String,
		?passProps:Dynamic,
		?title:String,
		?label:String
	}>;

	public static var styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#00FFCC',
		},
		text: {
			fontSize: 20,
			textAlign: 'center',
			margin: 10,
		},
		item: {
			margin: 30,
			color: 'red',
		},
		itemText: {
			margin: 30,
			color: 'green',
		}
	});

	static function start() {
		setDefaults();
		Navigation.events().registerAppLaunchedListener(
			function() {
				setNavigationStack();
			}
		);
	}

	static function setNavigationStack() {
		Navigation.setRoot({
			root: {
				sideMenu: {
					left: {
						component: {
							name: 'scene.DrawerMenu',
							passProps: {
								text: 'This is a left side menu screen'
							}
						}
					},
					center: {
						stack: {
							children: [{
								component: {
									name: 'Home',
									options: {
										topBar: {visible: false}
									}
								}
							}],
							options: {
								layout: {orientation: [Portrait]},
							}
						}
					},
				},
			}
		});
	}

	static function setDefaults() {
		// Navigation.setDefaultOptions(tools.NavigationUtils.defaultOptions);
	}
}
