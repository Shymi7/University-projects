import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DevicesScreen from "./DevicesScreen";
import ConnectionScreen from "./ConnectionScreen";
import AddDeviceModalScreen from "./AddDeviceModalScreen";
// import createStackNavigator from "react-native-screens/createNativeStackNavigator";

import Ionicons from 'react-native-vector-icons/Ionicons';





const Tab = createBottomTabNavigator();
// const RootStack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Devices"
          component={DevicesScreen}
          // options={{
          //   tabBarLabel: "Devices",
          //   tabBarIcon: ({ focused, color, size }) => {
          //     return <Ionicons name="home-outline
          //     " size={size} color={color} />;
          //   },
          // }}
        />
        <Tab.Screen name="Connection" component={ConnectionScreen} />
        <Tab.Screen name="Add Device" component={AddDeviceModalScreen} />

      </Tab.Navigator>
      {/*<Tab.Group screenOptions={{presentation: 'modal'}}>*/}
      {/*  <Tab.Screen name="MyModal" component={AddDeviceModalScreen} />*/}
      {/*</Tab.Group>*/}
    </NavigationContainer>
  );
}
