import React from "react";


import{
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";




export default class CalcButton extends React.Component{

    constructor(props){
        super(props);

        let propsData = props.data;
        const widthOfButton = propsData.portraitMode ? (propsData.doubleWidth ? 194 : 96) : (propsData.doubleWidth ? 236 : 117);
        const heightOfButton = propsData.portraitMode ? 110 : 50;

        this.styles = StyleSheet.create({
            button:{
                backgroundColor: propsData.color,
                width: widthOfButton,
                margin:1,
                height: heightOfButton,
                justifyContent:'center'
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
        

        });

    }

    render(){
        return(
            <TouchableOpacity style= { this.styles.button } onPress= { this.props.data.onPress }>
                <Text style = { this.styles.buttonText }>
                    { this.props.data.text }
                </Text>

            </TouchableOpacity>
        );
    }





}