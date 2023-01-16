import {ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import Result from "./Result";

export default function ResultsScreen() {

    const [resultsData, setResultsData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://tgryl.pl/quiz/results',
            );

            setResultsData(result.data);
        };
        fetchData().then()
    }, []);

    const resultComponents = resultsData.map(result => {
        return(
            <Result key={result.id} props={result}/>
        );
    })


    return (
        <ScrollView style={styles.container}>
            {resultComponents}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#262626',
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