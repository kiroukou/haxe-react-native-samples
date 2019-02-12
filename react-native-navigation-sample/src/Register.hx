
import react.native.navigation.Navigation;
import screens.*;
import comps.*;
import react.native.api.AppRegistry;

class Register
{
    static public function registerScreens()
    {
		/* Attempt to make HMR to work, seems it is done on other working samples
		AppRegistry.registerComponent('Home', (function() return HomeScene));
		AppRegistry.registerComponent('First', (function() return Scene1));
		AppRegistry.registerComponent('Second', (function() return Scene2));
		AppRegistry.registerComponent('Third', (function() return Scene3));
		AppRegistry.registerComponent('Popup', (function() return Popup));
		AppRegistry.registerComponent('scene.DrawerMenu', (function() return DrawerMenu));
		*/
		
        // still work the same in RNNV2 but we can also consider using registerComponentWithRedux, which is cool
		Navigation.registerComponent('Home', (function() return HomeScene));
		Navigation.registerComponent('First', (function() return Scene1));
		Navigation.registerComponent('Second', (function() return Scene2));
		Navigation.registerComponent('Third', (function() return Scene3));
		Navigation.registerComponent('Popup', (function() return Popup));
		Navigation.registerComponent('scene.DrawerMenu', (function() return DrawerMenu));
    }
}