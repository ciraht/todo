import {Text, StyleSheet, View, ScrollView} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCount from "../components/BtnCount";
import colors from "../design/colors";
import Search from "../components/Search";
import EmptyList from "../components/EmptyList";
import Card from "../components/Card";
import {useState} from "react";

export default function HomeScreen() {
    const [lista, setLista] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [busca, setBusca] = useState("");

    function cadastrarTarefa() {
        let aux = [
            ...lista,
            {
                tarefa: novaTarefa,
                concluido: false,
            }
        ]

        setLista(aux);
        setNovaTarefa("");
    }

    function numTarefasConcluidas() {
        let concluidas = lista.filter(item => item.concluido);
        return concluidas.length;
    }

    function numTarefasAtivas() {
        let ativas = lista.filter(item => !item.concluido);
        return ativas.length;
    }

    function concluirTarefas(index) {
        let novaTarefa = [...lista];
        novaTarefa[index].concluido = !novaTarefa[index].concluido;
        setLista(novaTarefa);
    }

    function excluirTarefas(index) {
        let novaLista = lista.filter((item, i) => i !== index);
        setLista(novaLista);
    }


    return (
        <ScrollView>
            <Header/>
            <FormCadastro fnCadastrar={cadastrarTarefa} texto={novaTarefa} setTexto={setNovaTarefa} />
            <View style={styles.botoes}>
                <BtnCount text={"Tarefas Criadas"} num={numTarefasAtivas()}/>
                <BtnCount text={"Concluídas"} num={numTarefasConcluidas()} isGreen={true}/>
            </View>
            <Search/>
            {lista.length === 0 && <EmptyList/>}
            {lista.sort((a,b) => a.concluido - b.concluido)
                .map((item, index) => (
                <Card key={index} texto={item.tarefa} concluido={item.concluido} fnExcluir={() => excluirTarefas(index)} fnConcluir={() => concluirTarefas(index)}/>
            ))}
        </ScrollView>
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