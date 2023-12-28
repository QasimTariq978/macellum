const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Explore from './screens/Explore';
import SignUp from './screens/SignUp';
import SelectLocation from './screens/SelectLocation';
import Verification from './screens/Verification';
import PhoneNumber from './screens/PhoneNumber';
import Start from './screens/Start';
import FrontScreen from './screens/FrontScreen';
import Account from './screens/Account';
import Search from './screens/Search';
import Favorites from './screens/Favorites';
import MyCart from './screens/MyCart';
import Filters from './screens/Filters';
import Beverages from './screens/Beverages';
import ProductDetail from './screens/ProductDetail';
import LogIn from './screens/LogIn';
import SignIn from './screens/SignIn';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="FrontScreen"
              component={FrontScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="Start"
              component={Start}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PhoneNumber"
              component={PhoneNumber}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SelectLocation"
              component={SelectLocation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Account"
              component={Account}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Explore"
              component={Explore}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Beverages"
              component={Beverages}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Filters"
              component={Filters}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MyCart"
              component={MyCart}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
