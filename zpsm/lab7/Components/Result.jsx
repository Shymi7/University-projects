import {StyleSheet, Text, View,} from "react-native";

export default function Result({props}) {
    return (

        <View style={styles.container}>
            <Text style={styles.textNick}>
                {props.nick}
            </Text>


            <Text style={styles.textType}>
                {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
            </Text>
            <Text style={styles.textScore}>
                Points: {props.score}/{props.total}
            </Text>


            <Text style={styles.textDate}>
                {props.createdOn}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        flexDirection: "column",
        backgroundColor: '#ffffff',
        margin: 3,
        paddingLeft: 13,
        paddingBottom: 13,
    },
    textNick: {
        color: '#000000',
        alignSelf: 'center'
    },
    textScore: {
        color: '#000000',
    },
    textType: {
        color: '#000000',
    },
    textDate: {
        color: '#000000',
    },
});
