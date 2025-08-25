import {Text, StyleSheet, View} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCount from "../components/BtnCount";
import colors from "../design/colors";
import Search from "../components/Search";
import EmptyList from "../components/EmptyList";
import Card from "../components/Card";

export default function HomeScreen() {
    return (
        <View>
            <Header/>
            <FormCadastro/>
            <View style={styles.botoes}>
                <BtnCount text={"Tarefas Criadas"} num={"0"}/>
                <BtnCount text={"Concluídas"} num={"0"} isGreen={true}/>
            </View>
            <Search/>
            <EmptyList/>
            <Card/>
        </View>
    )
}

const styles = StyleSheet.create({
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_330,
        paddingBottom: 20,
    }
})