import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";


export default function DeviceCard({data}){
  console.log(data);
  return(
    <View style={style.container}>
      <Text style={style.header}>
        {data.object.name}
      </Text>
      <Text style={style.content}>
        {data.object.place}
      </Text>
    </View>
  );
}


const style=StyleSheet.create({
  container:{
    backgroundColor:'rgba(64,175,105,0.62)',
    justifyContent:"center",
    alignItems:"center",
    width:"48%",
    borderStyle:"solid",
    margin:"1%",
    height:170,
  },
  header:{
    fontSize:25,
  },
  content:{
    fontSize:18
  }
})
