import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.View;
import react.native.component.Button;
import react.native.api.AppRegistry;
import react.native.api.StyleSheet;

class Main extends ReactComponent {

	public static function main() {
		AppRegistry.registerComponent("Main", function() return Main);
        AppRegistry.registerComponent("Demo", function() return Demo);
		AppRegistry.registerComponent("MyApp", function() return MyApp);
		var m = new Main();
	}
	
	public static var styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#22FF00',//Change me !
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'stretch',
		},
	});
    
	override function render() {
		return jsx('
            <View style=${styles.container}>
                <Demo />
                <MyApp />
            </View>
        ');
	}
}
