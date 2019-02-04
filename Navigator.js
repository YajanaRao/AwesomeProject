import LoginScreen from './src/pages/LoginScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import HomeScreen from './src/pages/HomeScreen';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { AsyncStorage } from 'react-native';

const user = AsyncStorage.getItem('user');

function authentication(){
    if(user){
        console.log(user);
        return 'Home'
    }else{
        console.log(user);
        return 'Login'
    }
}

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
        initialRouteName: authentication(),
    });

export default createAppContainer(Navigator);