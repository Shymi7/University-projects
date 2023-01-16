import {Button, DrawerLayoutAndroid, StyleSheet, Text, View} from "react-native";


export default function MainScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Home page
            </Text>
        </View>
    );
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