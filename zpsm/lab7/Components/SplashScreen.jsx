import React, { useEffect } from "react";
import {useState} from 'react';


import{
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
} from 'react-native'



export default function SplashScreen() {
    const [isActive, setIsActive] = useState(false);
    useEffect(()=>{
        setIsActive(true);
    }, [])


    const handleClick = () => {
        setIsActive(false);
    };


    const styles = StyleSheet.create({
        splashScreen:{

            zIndex:10,
            width:'100%',
            height:'100%',
            backgroundColor:'#004e04',


        },

    });

    return (
        <View style={{
            zIndex:10,
            width:'100%',
            height:'100%',
            backgroundColor:'#696969',
            paddingTop:'70%',
            alignItems:'center',

            display:isActive ? 'flex' : 'none'
        }}>
            <Text style={{
                fontSize:40
            }}>
                Korzystając z aplikacji zgadzasz się na warunki użytkowania
            </Text>

            <TouchableOpacity onPress={handleClick} style={{
                backgroundColor:'#fdfdfd',
                padding:30,
                borderRadius:5,
            }}>

                <Text>
                    Zgadzam się
                </Text>

            </TouchableOpacity>
        </View>
    );
}