package comps;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.*;
import react.native.api.*;
import react.native.navigation.*;

typedef PopupProps = {
    var message: String;
}

class Popup extends ReactComponentOfProps<PopupProps> {
    public static var styles = StyleSheet.create({
        view : {
            height : '50%',
            flexDirection : 'column',
            alignItems: 'stretch',
            justifyContent:'center'
        },
        text  : {
            height: 50,
            backgroundColor:'steelblue'
        }
    });

    public function new(props:PopupProps) {
        super(props);
    }
    
    override function render() {
        var styles = Popup.styles;
        return jsx('
            <View style=${styles.view}>
                <Text style=${styles.text}>${props.message}</Text>
            </View>
        ');
    }
}