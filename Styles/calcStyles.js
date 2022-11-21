import { fixDependencies } from "mathjs";
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


      // button:{
      //   backgroundColor:'#575757',
        
      //   width:96,
      //   margin:1,
      //   height:80,
      //   justifyContent:'center'
        
      // },
      // buttonText:{
      //   textAlign:'center',
      //   color:'#ffffff',
      //   fontSize:30
      // },
      // wideButton:{
      //   backgroundColor:'#575757',
      //   width:194,
      //   margin:1,
      //   height:80,
      //   justifyContent:'center'
        
      // },
      // coloredButton:{
      //   backgroundColor:'#237765',
      //   width:96,
      //   margin:1,
      //   height:80,
      //   justifyContent:'center'
        
      // },


});

export {styles};