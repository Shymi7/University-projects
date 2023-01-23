import * as React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function AddDeviceModalScreen() {
  const [name, setName] = useState('')
  const [place, setPlace] = useState('')
  const [command, setCommand] = useState('')



  const storeData = async () => {
    const object = {
      name: name,
      place: place,
      command: command,
    }
    try {
      const existingArrayString = await AsyncStorage.getItem('objectArray');
      let existingArray = JSON.parse(existingArrayString) || [];
      existingArray.push(object);
      await AsyncStorage.setItem('objectArray', JSON.stringify(existingArray));
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <View
      style={{
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
      }}
    >
      <TextInput onChangeText={setName} style={style.input} placeholder={"Name"} />
      <TextInput onChangeText={setPlace} style={style.input} placeholder={"Place"} />
      <TextInput onChangeText={setCommand} style={style.input} placeholder={"Command"} />

      <Button
        title={"Save"}
        style={{
          width: "30%",
          alignSelf: "center",
        }}
        onPress={storeData}
      />

    </View>
  );
}


const style = StyleSheet.create({
  input: {
    backgroundColor: "rgba(64,175,105,0.62)",
    width: "100%",
    marginTop: 20,
  },

});
