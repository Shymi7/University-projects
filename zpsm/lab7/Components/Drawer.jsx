import {StyleSheet, Text, View, DrawerLayoutAndroid, Button} from 'react-native';
import {NavigationContainer, useNavigation} from "@react-navigation/native";

import {useRef, useState} from "react";




const MySideMenu = () => {
    return (
        <View style={styles.container}>
            <Text>This is my side menu</Text>
            {/* Add other menu items here */}
        </View>
    );
};


export default function Drawer({children}) {

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");

    const navigation = useNavigation();


    const changeDrawerPosition = () => {
        if (drawerPosition === "left") {
            setDrawerPosition("right");
        } else {
            setDrawerPosition("left");
        }
    };

    const navigationView = () => (

        <View style={[styles.container, styles.navigationContainer]}>
            <Button
                title="Main Screen"
                onPress={() => navigation.navigate('MainScreen')}
            />
            <Button
                title="Quiz 1"
                onPress={() => navigation.navigate('QuizScreen')}
            />
            <Button
                title="Score"
                onPress={() => drawer.current.closeDrawer()}
            />

        </View>
    );
    return(
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}
        >
            {children}

        </DrawerLayoutAndroid>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
});