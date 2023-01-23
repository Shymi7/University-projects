import * as React from "react";
import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceCard from "./DeviceCard";
// import createStackNavigator from "react-native-screens/createNativeStackNavigator";




// const RootStack = createStackNavigator();


export default function DevicesScreen() {
  const [objectArray, setObjectArray] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('objectArray').then((arrayString) => {
      setObjectArray(JSON.parse(arrayString));
    });
  }, []);

  const deviceCards = objectArray.map((object, index) => (
    <DeviceCard key={index} data={{object}} />
  ))

  return (
    <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:'flex-start', alignItems:'flex-start',  }}>
      {deviceCards}
    </View>
  );
}
