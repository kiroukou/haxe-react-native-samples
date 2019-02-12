package screens;

import scene.*;
import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.api.StyleSheet;
import react.native.component.*;
import react.native.component.Button;
import react.native.navigation.Navigation;

using tools.NavigationUtils;
typedef HomeProps = {
	> react.native.navigation.NavProps,
}

class HomeScene extends ReactComponentOfProps<HomeProps> {
	public static var styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
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
		},
		button: {},
	});

	var items:Array<{label:String, value:String}>;

	function new(props:HomeProps) {
		super(props);
		state = {}
		items = [
			{label: 'one', value: 'First'},
			{label: 'twooo', value: 'Second'},
			{label: 'three', value: 'Third'},
		];
	}

	function onCategoryPressed(item:{label:String, value:String}, index:Int) {
		this.navPush(
			item.value,
			null
			
		);
		/*
			mergeDefOptions({
				topBar: {
					title: {
						text: 'pushed',
						color: '#0000ff',
						fontSize: 14
					},
					subtitle: {
						text: 'subtitle',
						fontSize: 10,
						color: '#00ff00'
					}
				}
			})
			*/
	}

	function renderList() {
		var styles = HomeScene.styles;
		return [
			for (i in 0...items.length)
				jsx('
			<Button 
				key=${i}
				title=${items[i].label}
				onPress=${onCategoryPressed.bind(items[i], i)}
			/>
		')];
	}

	override function componentDidMount() {}

	override function render() {
		return jsx('
			<View style={styles.container}>
				<Text style=${styles.text}>The navigation menu</Text>
				${renderList()}
			</View>
	  	');
	}
}
