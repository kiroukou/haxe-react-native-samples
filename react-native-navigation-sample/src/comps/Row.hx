package comps;

import react.ReactComponent;
import react.component.*;
import react.ReactMacro.jsx;
import react.native.api.StyleSheet;
import react.native.component.TouchableHighlight;
import react.native.component.Button;
import react.native.component.View;
import react.native.component.Text;
import react.native.navigation.Navigation;

typedef RowProps = {
    var onPress:Void->Void;
    var onPressIn:Void->Void;
    var title:String;
}

class Row extends ReactComponentOfProps<RowProps> {
    public static var styles = StyleSheet.create({
        row: {
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'white'
        },
        text: {
            fontSize: 20,
            color: 'black',
        }
    });

    public function new(props:RowProps) {
        super(props);
    }

    override function render() {
        var styles = Row.styles;
        return jsx('
            <TouchableHighlight
                onPress=${props.onPress}
                onPressIn=${props.onPressIn}
                underlayColor="#555555"
            >
                <View style={styles.row}>
                    <Text style={styles.text}>${props.title}</Text>
                </View>
            </TouchableHighlight>
        ');
    }
}