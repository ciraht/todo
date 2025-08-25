import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../design/colors";

export default function Card() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnCheck} onPress={() => alert("Crie tarefa")}>
            </TouchableOpacity>

            <Text style={styles.texto} >FAJOIOÇF</Text>

            <TouchableOpacity onPress={() => alert("Excloi tarefa")}>
                <Image style={styles.lixo} source={require('../assets/lixo.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_330,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_200,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    btnCheck: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.purple_base,
    },
    texto: {
        color: colors.gray_600,
        fontSize: 18,
        width: "77%"
    },
    lixo: {
        width: 30,
        resizeMode: "contain",
    },
})