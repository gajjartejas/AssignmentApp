import React from 'react';

//Navigation and Screens
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Containers/LoginScreen';
import VariousButtonsScreen from '../Containers/VariousButtonsScreen';
import NativeBridgeScreen from '../Containers/NativeBridgeScreen';

//App Modules
import {AppImageButton} from '../Components/index';
import {Colors} from '../Theme/index';

//Redux
import {useSelector, useDispatch} from 'react-redux';
import {ILoginState} from '../Models/reducers/login';
import * as loginActions from '../Store/actions/loginActions';

//Create stack navigator
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

//Redux state interface
interface IState {
  loginReducer: ILoginState;
}

//Home/Logged In Stack Navigator
const LoggedInNavigator = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const options: object = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <AppImageButton
        source={require('../Assets/Images/logout.png')}
        onPress={onLogout}
      />
    ),
  };

  return (
    <LoggedInStack.Navigator>
      <Stack.Screen
        name="VariousButtons"
        component={VariousButtonsScreen}
        options={options}
      />
      <Stack.Screen
        name="NativeBridge"
        component={NativeBridgeScreen}
        options={options}
      />
    </LoggedInStack.Navigator>
  );
};

//Auth Navigator
const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  const options: object = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    // When logging out, a pop animation feels intuitive
    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
  };
  return (
    <AuthStack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={options} />
    </AuthStack.Navigator>
  );
};

//Main Navigator
const MainNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={LoggedInNavigator}
        />
      ) : (
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={AuthNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
