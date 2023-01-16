import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import {quizzesData} from "../Data/quizzesData";
import {useEffect, useState} from "react";
import Question from "./Question";
import axios from "axios";
import Result from "./Result";

import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";



export default function QuizScreen({route}) {

    const [quizzesData, setQuizzesData] = useState([]);
    const [isQuizChosen, setIsQuizChosen] = useState(false);
    const [isQuizEnded, setIsQuizEnded] = useState(false);


    const [currentQuiz, setCurrentQuiz] = useState(null);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuizScore, setCurrentQuizScore] = useState(0);


    const startWithRandomQuiz = route.params.startWithRandomQuiz;


    var _ = require('lodash');

    //sucking data from api
    useEffect(() => {
        NetInfo.fetch().then(state => {

            const  checkConnection = async () =>{
                if(!state.isConnected){
                    const jsonValue = await AsyncStorage.getItem('@quizzesData')
                    setQuizzesData(jsonValue != null ? JSON.parse(jsonValue) : null);
                }
            }
            checkConnection().then()

        });
        const fetchData = async () => {
            return new Promise((resolve, reject) => {
                axios('https://tgryl.pl/quiz/tests')
                    .then(async (result) => {
                        setQuizzesData(result.data);
                        const jsonValue = JSON.stringify(result.data);
                        await AsyncStorage.setItem('@quizzesData', jsonValue);
                        // console.log("zapisano");
                        // console.log(result.data);
                        //resolve(result.data);
                    })
                    .catch(async (error) => {
                        try {
                            const jsonValue = await AsyncStorage.getItem('@quizzesData')
                            setQuizzesData(jsonValue != null ? JSON.parse(jsonValue) : null);
                            console.log(jsonValue);


                        } catch (e) {
                            console.log("Error while downloading quizzesData from localStorage: " + e);
                        }
                        //reject(error);
                    });
            });
        };
        fetchData().then()
    }, []);


    function nextQuestion(wasAnswerCorrect) {

        //end quiz if it was the last question
        if (currentQuestionIndex + 1 === currentQuiz.tasks.length) {
            setIsQuizEnded(true);

            fetch('http://tgryl.pl/quiz/result', {
                method: 'POST',
                body: JSON.stringify({
                    nick: "Shymi",
                    score: currentQuizScore,
                    total: currentQuiz.tasks.length,
                    type: currentQuiz.name
                })
            });
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (wasAnswerCorrect)
            setCurrentQuizScore(currentQuizScore + 1);
    }

    async function chooseQuiz(quizId) {
        let result = await axios(
            'https://tgryl.pl/quiz/test/' + quizId,
        );
        result.data.tasks = _.shuffle(result.data.tasks);

        setCurrentQuiz(result.data);
        setIsQuizChosen(true);
    }

    const choiceButtons = _.shuffle(quizzesData.map(quiz => {
        return (
            <TouchableOpacity
                key={quiz.name}
                style={[
                    styles.choiceButton,
                    {backgroundColor: hslToHex(Math.floor(Math.random() * 360), 100, 25)}
                ]}
                onPress={() => {
                    chooseQuiz(quiz.id).then();
                }}
            >

                <Text style={styles.choiceButton}>
                    {quiz.name}
                </Text>
            </TouchableOpacity>
        )
    }));

    const mainContainer = () => {
        if (isQuizEnded) {
            return (
                <Result
                    props={{
                        nick: "Shymi",
                        score: currentQuizScore,
                        total: currentQuiz.tasks.length,
                        type: currentQuiz.name
                    }}
                />
            );
        }

        if (isQuizChosen) {
            return (
                <View>
                    <Question
                        props={currentQuiz.tasks}
                        questionIndex={currentQuestionIndex}
                        nextQuestionFunc={nextQuestion}
                    />
                </View>
            );
        }

        if (startWithRandomQuiz && quizzesData.length !== 0) {
            chooseQuiz(quizzesData[Math.floor(Math.random() * quizzesData.length)].id).then();
        }

        return (
            <View>
                {choiceButtons}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {mainContainer()}
        </View>
    );
}

function hslToHex(h, s, l) { //from stackoverflow
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        height: '100%'
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    },
    choiceButton: {
        width: 200,
        display: 'flex',
        justifyContent: 'center',


        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',

        borderRadius: 8,
        padding: 10,
        margin: 10,
    }
});



