package comps;

import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.component.*;
import react.native.api.*;
import react.native.navigation.*;

typedef DrawerProps = {
    >NavProps,
    text:String,
}
class DrawerMenu extends ReactComponentOfProps<DrawerProps> {
    public static var styles = StyleSheet.create({
        view : {
            height : '50%',
            flexDirection : 'column',
            alignItems: 'stretch',
            justifyContent:'center'
        },
    });

    public function new(p) {
        super(p);
    }
    
    override function render() {
        var styles = DrawerMenu.styles;
        return jsx('
            <View style=${styles.view}>
                <Text>${props.text}</Text>
                <CustomButton text="Home"/>
                <CustomButton text="Blablabla"/>
                <CustomButton text="Favoris"/>
                <CustomButton text="Mon Compte"/>
                <CustomButton text="Réglages"/>
            </View>
        ');
    }
}