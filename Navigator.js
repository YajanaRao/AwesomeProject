import LoginScreen from './src/pages/LoginScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import HomeScreen from './src/pages/HomeScreen';
import { createAppContainer, createStackNavigator } from 'react-navigation';


const Navigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Details: {
        screen: DetailsScreen
    }
}, {
        initialRouteName: 'Login',
    });

export default createAppContainer(Navigator);