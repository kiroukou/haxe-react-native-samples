import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.View;
import react.native.component.Button;
import react.native.api.AppRegistry;
import react.native.api.StyleSheet;

class MyApp extends ReactComponent {
    public static var styles = StyleSheet.create({
		container: {
			flex: 1,
            flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			backgroundColor: '#4478',
            padding: 20,
		},
	});

    function onClick() {
    }

    override function render() {
		return jsx('
			<View>
                <Button 
                    color="green"
                    key="100001"
                    title="Hello You"
                    onPress=${onClick}
                />
			</View>
		');
	}
}