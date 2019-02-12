
import react.native.navigation.Navigation;
import screens.*;
import comps.*;

class Register
{
    static public function registerScreens()
    {
        // still work the same in RNNV2 but we can also consider using registerComponentWithRedux, which is cool
		Navigation.registerComponent('Home', (function() return HomeScene));
		Navigation.registerComponent('First', (function() return Scene1));
		Navigation.registerComponent('Second', (function() return Scene2));
		Navigation.registerComponent('Third', (function() return Scene3));
		Navigation.registerComponent('Popup', (function() return Popup));
		Navigation.registerComponent('scene.DrawerMenu', (function() return DrawerMenu));
    }
}