import react.ReactComponent;
import react.ReactMacro.jsx;
import react.native.api.StyleSheet;

import react.native.component.View;
import react.native.component.Button;

@:build(lib.lodash.Lodash.build())
class Demo extends ReactComponent {
    public static var styles = StyleSheet.create({
		container: {
			justifyContent: 'center',
			backgroundColor: 'green',//change me !
		},
		text: {
			fontSize: 20,
			textAlign: 'center',
			margin: 10,
		},
	});

    @:throttle(1000)
    inline static function onClickThrottled() {
        trace("click throttled");
    }

    @:debounce(1000, {trailing:true })
    public function onClickDebounced() {
        trace("click debounced");
    }

    override public function render() {
        var styles = Demo.styles;
        return jsx('
            <View style=${styles.container}>
                <Button 
                    color="blue"
                    key="0"
                    title="Click Me Throttled"
                    onPress=${onClickThrottled}
                />

                 <Button 
                    key="1"
                    color="black"
                    title="Debounced click"
                    onPress=${onClickDebounced}
                />
            </View>
        ');
    }
}