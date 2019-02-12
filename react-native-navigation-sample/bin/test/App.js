import { Navigation } from 'react-native-navigation';
import Home from './Home';
import Settings from './Settings';

Navigation.registerComponent('HomeScreen', () => Home);
Navigation.registerComponent('SettingsScreen', () => Settings);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
           
                stack: {
                    children: [{
                        component: {
                            name: 'HomeScreen',
                        }
                    }]
                }
           
        }
    })
});