package screens;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.*;
import react.native.api.*;
import react.native.navigation.*;
import comps.Row;

using Lambda;
using tools.NavigationUtils;
private typedef SceneProps = {
	> NavProps,
	?text:String,
}

private typedef RowData = {
	var key:String;
	var id:Int;
}

class Scene1 extends ReactComponentOfProps<SceneProps> {
	static var styles = Main.styles;
	var data:Array<RowData>;
/*
	public static var options = {
		topBar: {
			title: {
				text: 'test default options',
			}
		}
	}
*/
	function new(props:SceneProps) {
		super(props);
		var id:Int = 0;
		data = [for( i in 0...100) 'Toto_$i'].map(function(o) return {id:id++, key:o});
	}


	function componentDidAppear() {
trace("appeared");
	}
	
	function onPressed( o: RowData, validated:Bool) {
		if( !validated ) return;
		//this.navShowOverlay(
		this.navModalAsOverlay(
			'Popup',  
			{message: 'This Overlay screen to display my value ${o.key}'}, 
			{ topBar: { title: { color:'red', text:'Modale en overlay'} }}
		);
		/*
		Navigation.showLightBox( {
			screen : 'Popup',
			passProps: {
				message: 'This Overlay screen to display my value ${o.key}'
			},
			style: {
				backgroundBlur : 'dark',
				//backgroundColor: '#00000000',
				tapBackgroundToDismiss: true
			}
		});
		*/
	}

	function renderItem( o:{item:RowData} ) {
		var rowProps = {
			onPress:onPressed.bind(o.item, true),
			onPressIn:onPressed.bind(o.item, false),
			title:o.item.key,
		};
		return jsx('
			<Row {...rowProps} />
		');
	}
	
	function keyExtractor(o:RowData, index:Int):String {
		return o.id+'';
	}

	function goBack() {
		this.navPop();
	}
	
	
	override function render() {
		var msg = (props.text != null) ? jsx('<Text>${props.text}</Text>') : null;
		return jsx('
			<View style={styles.container}>
				<Text style={styles.text}>
					This is Scene1 (one)
					${msg}
				</Text>
				<Button 
					title="Back Link" 
					onPress=$goBack
				/>
				<FlatList
					data=$data
					renderItem=$renderItem
					keyExtractor=$keyExtractor
				/>
			</View>
		');
	}
}
