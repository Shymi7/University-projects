import {StyleSheet, Text, View, Touchable, TouchableOpacity} from "react-native";

export default function Question({props, questionIndex, nextQuestionFunc}) {
    var _ = require('lodash');

    const choices =_.shuffle(props[questionIndex].answers.map(answer => {
        return (
            <TouchableOpacity
                style={[
                    styles.answerButton,
                    {backgroundColor: hslToHex(Math.floor(Math.random()*360),100, 25)}
                ]}
                key={answer.content}
                onPress={()=>{
                    nextQuestionFunc(answer.isCorrect)
                }}
            >
                <Text style={{color:'#ffffff'}}>
                    {answer.content}
                </Text>
            </TouchableOpacity>
        );
    }));


    return (
        <View style={styles.container}>
            <View style={styles.questionValue}>
                <Text style={{fontSize:25, alignSelf:'center'}}>
                    {props[questionIndex].question}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                {choices}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    questionValue: {
        flex: 1,
        padding:30,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#7a7a7a',
        width:394,
    },
    answerButton: {
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin:6,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function hslToHex(h, s, l){ //from stackoverflow
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}