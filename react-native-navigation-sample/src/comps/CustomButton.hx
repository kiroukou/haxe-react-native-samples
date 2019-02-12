package comps;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.api.StyleSheet;
import react.native.component.*;

/**
This is just for a testing purpose
**/

typedef CustomButtonProps = {
    var text:String;
}

@:jsxStatic('render')
class CustomButton {
    static var styles = StyleSheet.create({
        button: {
            overflow: 'hidden',
            width: 120,
            height: 40,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            margin: 10,
        },
    });

	static public function render(props : CustomButtonProps) {
		return jsx('
            <TouchableOpacity
                style=${styles.button}
            >
                <View style={${styles.button}}>
                    <Text style={{ color: "black" }}>
                        ${props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        ');
	}

}