package screens;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.*;

using tools.NavigationUtils;
private typedef SceneProps = {
	> react.native.navigation.NavProps,
}

class Scene2 extends ReactComponentOfProps<SceneProps> {
	static var styles = Main.styles;
	
/*
	public static var options = {
		topBar: {
			title: {
				text: 'test default options for screen 2',
			}
		}
	}
*/

	function new(props:SceneProps) {
		super(props);
	}

	function goBack() {
		this.navPop();
	}

	function goFirstScreen() {
		this.navPush(
			"First", 
			{text:"Coucou"},
			mergeDefOptions({topBar: { title: {text:"Iam the king", color:"pink"}}})
		);
		// this.props.navigator.push({ screen: "First", title: "Pushed Screen"});
	}

	override function render() {
		return jsx('
			<View style={styles.container}>
				<Text style={styles.text}>
					This is Scene2
				</Text>
				<Button 
					title="Back" 
					onPress=$goBack
				/>
				<Button 
					title="Goto First screen" 
					onPress=$goFirstScreen
				/>
			</View>
		');
	}
}
