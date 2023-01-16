import {View, StyleSheet, TouchableOpacity, Text} from "react-native";

export default function TopBar({title}) {

    return (
        <View style={styles.TopBar}>
            <TouchableOpacity style={styles.navigationButton}>
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    TopBar: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#555',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title:{
        fontSize: 20,
        color: '#fff',
    },
    navigationButton:{

    }
});