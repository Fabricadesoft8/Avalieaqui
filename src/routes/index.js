import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Recover from '../pages/Recover';
import Perfil from '../pages/Perfil';
import Avaliation from '../pages/Avaliation';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name='Recover'
      component={Recover}
      options={{ headerShown: false}}
      />
      <Stack.Screen
      name='Perfil'
      component={Perfil}
      options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Avaliation"
        component={Avaliation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

)
}