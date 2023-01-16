import 'react-native-gesture-handler';

import {StyleSheet, Text, View, DrawerLayoutAndroid, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainScreen from "./Components/MainScreen";
import QuizScreen from "./Components/QuizScreen";
import ResultsScreen from "./Components/ResultsScreen";
import SplashScreen from "./Components/SplashScreen";

import AsyncStorage from '@react-native-async-storage/async-storage';


import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {useState} from "react";


export default function App() {

    const Drawer = createDrawerNavigator();
    const [showSplashScreen, setShowSplashScreen] = useState(false);

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@isAppOpenFirstTime', "true")
        } catch (e) {
            // saving error
        }
    }; storeData().then();


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@isAppOpenFirstTime')
            if(value !== null) {

                if(value==="true"){
                    setShowSplashScreen(true);

                }
            }
        } catch(e) {
            // error reading value
        }
    }; getData().then();


    return (
        <NavigationContainer>
            {!showSplashScreen && <SplashScreen/>}
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Main" component={MainScreen} />
                <Drawer.Screen name="Quizzes" component={QuizScreen} initialParams={{startWithRandomQuiz:false}}/>
                <Drawer.Screen name="Random Quiz" component={QuizScreen} initialParams={{startWithRandomQuiz:true}}/>
                <Drawer.Screen name="Results" component={ResultsScreen} />
                <Drawer.Screen name="Download newest quizzes" component={QuizScreen} initialParams={{startWithRandomQuiz:false}}/>

            </Drawer.Navigator>
        </NavigationContainer>


    )
}

