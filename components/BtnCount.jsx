import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import colors from "../design/colors";
import {useNavigation} from "@react-navigation/native";

export default function BtnCount({text, num, page=null, isGreen}) {

    const navigation = useNavigation();

    function mudarPagina() {
        if (page) {
            navigation.navigate(page)
        }
    }

    let count = {
        backgroundColor: colors.purple_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 25,
        height: 25,
    }
    let textCount = {
        color: colors.purple_dark,
        fontSize: 12,
        fontWeight: 'bold',
    }

    if (isGreen) {
        textCount.color = colors.green_dark;
        count.backgroundColor = colors.green_light;
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={mudarPagina}>
            <Text style={styles.texto}>{text}</Text>
            <View style={count}>
                <Text style={textCount}>{num}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    texto: {
        color: colors.gray_500,
        fontSize: 20,
        fontWeight: 'bold',
    },
})