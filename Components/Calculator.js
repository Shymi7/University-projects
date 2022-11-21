import React, {useState} from "react";
import {styles} from "../Styles/calcStyles"
import {evaluate} from "mathjs"
import CalcButton from "./CalcButton";
import SplashScreen from "./SplashScreen";


import{
    View,
    Text,
    Dimensions
} from "react-native";
//import {encode} from 'html-entities';




export default class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={
          calcDisplay:"0",
          orientation: this.isPortrait() ? "portrait" : "landscape",
        }
        Dimensions.addEventListener('change', () => {
            this.setState({
              orientation: this.isPortrait() ? 'portrait' : 'landscape'
            });
        });

        
    }

    isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };


    addSignToDisplay = (value) =>{
        this.setState({
            calcDisplay: this.state.calcDisplay!=="0" ? (this.state.calcDisplay+value) : value
        })
    }
    displayResultOfEveluation = () =>{
        let result = String(evaluate(this.state.calcDisplay));
        if (typeof result === "string"){
            this.setState({
                calcDisplay: evaluate(result)
            })
        }


    }
    reset = () =>{
        this.setState({
            calcDisplay: "0"
        })
    }


    render(){
        let allButtons;
        if(this.state.orientation === 'portrait'){
            allButtons = null;
            allButtons = this.portraitButtons.map((button) =>{
                return(
                    <CalcButton data = {button} key={button.id}/>
                )
            });
        } else {
            allButtons = null;
            allButtons = this.landscapeButtons.map((button) =>{
                return(
                    <CalcButton data = {button} key={button.id}/>
                )
            });
        }
        // const Entities = require('html-entities').XmlEntities;
        //
        // const entities = new Entities();
        // console.log(entities.decode('&#8730'));


        return(
            <View>
                <SplashScreen />
                <View style={styles.mainContainer}>
                    <Text style={styles.result}>
                        {this.state.calcDisplay}
                    </Text>
                    {allButtons}
                </ View>
            </View>


        );
    }
    grayColor='#3d3d3d';
    silverColor='#5f5f5f';
    accentColor='#237e57';

    portraitButtons = [
        {
            id: 0,
            color:this.grayColor,
            text:'AC',
            onPress: () => {
                this.reset();
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 1,
            color:this.grayColor,
            text:'',
            onPress: () => {

            },
            portraitMode:true,
            doubleWidth:true,
        },
        {
            id: 2,
            color:this.accentColor,
            text:'/',
            onPress: () => {
                this.addSignToDisplay('/');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 3,
            color:this.silverColor,
            text:'7',
            onPress: () => {
                this.addSignToDisplay('7');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 4,
            color:this.silverColor,
            text:'8',
            onPress: () => {
                this.addSignToDisplay('8');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 5,
            color:this.silverColor,
            text:'9',
            onPress: () => {
                this.addSignToDisplay('9');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 6,
            color:this.accentColor,
            text:'x',
            onPress: () => {
                this.addSignToDisplay('*');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 7,
            color:this.silverColor,
            text:'4',
            onPress: () => {
                this.addSignToDisplay('4');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 8,
            color:this.silverColor,
            text:'5',
            onPress: () => {
                this.addSignToDisplay('5');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 9,
            color:this.silverColor,
            text:'6',
            onPress: () => {
                this.addSignToDisplay('6');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 10,
            color:this.accentColor,
            text:'-',
            onPress: () => {
                this.addSignToDisplay('-');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 11,
            color:this.silverColor,
            text:'1',
            onPress: () => {
                this.addSignToDisplay('1');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 12,
            color:this.silverColor,
            text:'2',
            onPress: () => {
                this.addSignToDisplay('2');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 13,
            color:this.silverColor,
            text:'3',
            onPress: () => {
                this.addSignToDisplay('3');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 14,
            color:this.accentColor,
            text:'+',
            onPress: () => {
                this.addSignToDisplay('+');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 15,
            color:this.silverColor,
            text:'0',
            onPress: () => {
                this.addSignToDisplay('0');
            },
            portraitMode:true,
            doubleWidth:true,
        },
        {
            id: 16,
            color:this.silverColor,
            text:',',
            onPress: () => {
                this.addSignToDisplay('.');
            },
            portraitMode:true,
            doubleWidth:false,
        },
        {
            id: 17,
            color:this.accentColor,
            text:'=',
            onPress: () => {
                this.displayResultOfEveluation();
            },
            portraitMode:true,
            doubleWidth:false,
        },

    ];

    landscapeButtons = [
        {
            id: 18,
            color:this.grayColor,
            text:('y*sqrt(x)'),
            // new Entities().decode('&#8730')
            onPress: () => {
                this.addSignToDisplay('asdf');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 19,
            color:this.grayColor,
            text:'x!',
            onPress: () => {
                this.addSignToDisplay('!');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 20,
            color:this.grayColor,
            text:'AC',
            onPress: () => {
                this.reset();
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 21,
            color:this.grayColor,
            text:'+/-',
            onPress: () => {
                this.addSignToDisplay('asdf');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 22,
            color:this.grayColor,
            text:'%',
            onPress: () => {
                this.addSignToDisplay('%');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 23,
            color:this.accentColor,
            text:':',
            onPress: () => {
                this.addSignToDisplay('/');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 24,
            color:this.grayColor,
            text:'e^x',
            onPress: () => {
                this.addSignToDisplay('e^');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 25,
            color:this.grayColor,
            text:'10^x',
            onPress: () => {
                this.addSignToDisplay('10^');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 26,
            color:this.silverColor,
            text:'7',
            onPress: () => {
                this.addSignToDisplay('7');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 27,
            color:this.silverColor,
            text:'8',
            onPress: () => {
                this.addSignToDisplay('8');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 28,
            color:this.silverColor,
            text:'9',
            onPress: () => {
                this.addSignToDisplay('9');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 29,
            color:this.accentColor,
            text:'x',
            onPress: () => {
                this.addSignToDisplay('*');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 30,
            color:this.grayColor,
            text:'ln',
            onPress: () => {
                this.addSignToDisplay('ln()');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 31,
            color:this.grayColor,
            text:'log10',
            onPress: () => {
                this.addSignToDisplay('log10()');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 32,
            color:this.silverColor,
            text:'4',
            onPress: () => {
                this.addSignToDisplay('4');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 33,
            color:this.silverColor,
            text:'5',
            onPress: () => {
                this.addSignToDisplay('5');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 34,
            color:this.silverColor,
            text:'6',
            onPress: () => {
                this.addSignToDisplay('6');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 35,
            color:this.accentColor,
            text:'-',
            onPress: () => {
                this.addSignToDisplay('-');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 36,
            color:this.grayColor,
            text:'e',
            onPress: () => {
                this.addSignToDisplay('e');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 37,
            color:this.grayColor,
            text:'x^2',
            onPress: () => {
                this.addSignToDisplay('^2');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 38,
            color:this.silverColor,
            text:'1',
            onPress: () => {
                this.addSignToDisplay('1');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 39,
            color:this.silverColor,
            text:'2',
            onPress: () => {
                this.addSignToDisplay('2');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 40,
            color:this.silverColor,
            text:'3',
            onPress: () => {
                this.addSignToDisplay('3');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 41,
            color:this.accentColor,
            text:'+',
            onPress: () => {
                this.addSignToDisplay('+');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 42,
            color:this.grayColor,
            text:'pi',
            onPress: () => {
                this.addSignToDisplay('pi');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 43,
            color:this.grayColor,
            text:'x^3',
            onPress: () => {
                this.addSignToDisplay('^3');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 44,
            color:this.silverColor,
            text:'0',
            onPress: () => {
                this.addSignToDisplay('0');
            },
            portraitMode:false,
            doubleWidth:true,
        },
        {
            id: 45,
            color:this.silverColor,
            text:',',
            onPress: () => {
                this.addSignToDisplay('.');
            },
            portraitMode:false,
            doubleWidth:false,
        },
        {
            id: 46,
            color:this.accentColor,
            text:'=',
            onPress: () => {
                this.displayResultOfEveluation();
            },
            portraitMode:false,
            doubleWidth:false,
        },

    ];
    
}


//let portraitInterface = 
        // <View style={styles.mainContainer}>
        //     <Text style={styles.result}>
        //         {this.state.calcDisplay}
        //     </Text>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.reset()}}>
        //         <Text style={styles.buttonText}>AC</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.wideButton}>
        //         <Text style={styles.buttonText}></Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("/")}}>
        //         <Text style={styles.buttonText}>:</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("7")}}>
        //         <Text style={styles.buttonText}>7</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("8")}}>
        //         <Text style={styles.buttonText}>8</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("9")}}>
        //         <Text style={styles.buttonText}>9</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("*")}}>
        //         <Text style={styles.buttonText}>x</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("4")}}>
        //         <Text style={styles.buttonText}>4</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("5")}}>
        //         <Text style={styles.buttonText}>5</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("6")}}>
        //         <Text style={styles.buttonText}>6</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("-")}}>
        //         <Text style={styles.buttonText}>-</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("1")}}>
        //         <Text style={styles.buttonText}>1</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("2")}}>
        //         <Text style={styles.buttonText}>2</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay("3")}}>
        //         <Text style={styles.buttonText}>3</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.addSignToDisplay("+")}}>
        //         <Text style={styles.buttonText}>+</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity style={styles.wideButton} onPress={()=>{this.addSignToDisplay("0")}}>
        //         <Text style={styles.buttonText}>0</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.button} onPress={()=>{this.addSignToDisplay(".")}}>
        //         <Text style={styles.buttonText}>,</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.coloredButton} onPress={()=>{this.displayResultOfEveluation()}}>
        //         <Text style={styles.buttonText}>=</Text>
        //     </TouchableOpacity>
        // </View>

        // let landscapeInterface = <LandscapeCalc />