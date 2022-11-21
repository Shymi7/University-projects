import React from "react";
import {styles} from "./landscapeStyles"
import {evaluate} from "mathjs"

import{
    View,
    TouchableOpacity,
    Text,
} from "react-native";



export default class LandscapeCalc extends React.Component{
    constructor(props){
        super(props);
        this.state={
          calcDisplay:"0",
        }
    }



    addSignToDisplay = (value) =>{
        this.setState({
            calcDisplay: this.state.calcDisplay!="0" ? (this.state.calcDisplay+value) : value
        })
    }
    evaluate = () =>{
        this.setState({
            calcDisplay: evaluate(this.state.calcDisplay)
        })
    }
    reset = () =>{
        this.setState({
            calcDisplay: "0"
        })
    }


    render(){
        return(
            <View style={styles.mainContainer}>
                <Text style={styles.result}>
                    {this.state.calcDisplay}
                </Text>

                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("")}}>
                    <Text style={styles.superscriptText}>y</Text>
                    <Text style={styles.buttonText}>&#8730;x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("!")}}>
                    <Text style={styles.buttonText}>x!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.reset()}}>
                    <Text style={styles.buttonText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("")}}>
                    <Text style={styles.buttonText}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("%")}}>
                    <Text style={styles.buttonText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("/")}}>
                    <Text style={styles.buttonText}>:</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("e^")}}>
                    <Text style={styles.buttonText}>e</Text>
                    <Text style={styles.superscriptText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("10^")}}>
                    <Text style={styles.buttonText}>10</Text>
                    <Text style={styles.superscriptText}>x</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("7")}}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("8")}}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("9")}}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("*")}}>
                    <Text style={styles.buttonText}>x</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("ln()")}}>
                    <Text style={styles.buttonText}>ln</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("log10()")}}>
                    <Text style={styles.buttonText}>log10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("4")}}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("5")}}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("6")}}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("-")}}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("e")}}>
                    <Text style={styles.buttonText}>e</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("^2")}}>
                    <Text style={styles.buttonText}>x&#xb2;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("1")}}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("2")}}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("3")}}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("+")}}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("pi")}}>
                    <Text style={styles.buttonText}>&#960;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton} onPress={()=>{this.addSignToDisplay("^3")}}>
                    <Text style={styles.buttonText}>x&#179;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wideButton} onPress={()=>{this.addSignToDisplay("0")}}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay(".")}}>
                    <Text style={styles.buttonText}>,</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.evaluate()}}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
