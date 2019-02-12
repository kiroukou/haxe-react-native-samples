package screens;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.*;

using tools.NavigationUtils;

private typedef SceneProps = {
	> react.native.navigation.NavProps,
}

class Scene3 extends ReactComponentOfProps<SceneProps> {
	static var styles = Main.styles;
	
	static var navigatorButtons = {
		leftButtons: [{ id: 'null' }],
		rightButtons: [{
			id: 'close-btn', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
			//icon: js.Lib.require('rsc/icon_message.png'), // for icon button, provide the local image asset name
			//buttonColor: 'rgb(128,41,76)', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
		}]
	};

	function new(props:SceneProps) {
		super(props);
	}

	override function componentDidMount() {
		//props.navigator.setOnNavigatorEvent(onNavigatorEvent);
	}

	function closeModale() {
		this.navDismissModal();
	}

	function goBack() {
		this.navPop();
	}

	override function render() {
		return jsx('
			<View style={styles.container}>
				<Text style={styles.text}>
					This is Scene3
				</Text>
				<Button 
					title="Back"
					onPress=$goBack
				/>
			</View>
		');
	}
}
