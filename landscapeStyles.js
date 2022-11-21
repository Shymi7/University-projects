


import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#303030',
        display:'flex',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        flexDirection:'row',
        height:'100%',
      },

      result:{
        backgroundColor:'#303030',
        color:'#ffffff',
        width:'100%',
        height:100,
        fontSize:65,
        textAlign:'right',
        padding:5
      },

      buttonText:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:30
      },
      superscriptText:{
        fontSize:18,
        textAlign:'center',
        color:'#ffffff',
      },

      button:{
        backgroundColor:'#575757',
        width:117,
        margin:1,
        height:50,
        justifyContent:'center'
        
      },

      coloredButton:{
        backgroundColor:'#237765',
        width:117,
        margin:1,
        height:50,
        justifyContent:'center'
      },

      grayButton:{
        backgroundColor:'#3f3f3f',
        width:117,
        margin:1,
        height:50,
        justifyContent:'center',

        flexDirection:'row',
      },

      wideButton:{
        backgroundColor:'#575757',
        width:236,
        margin:1,
        height:50,
        justifyContent:'center'
      },



});

export {styles};