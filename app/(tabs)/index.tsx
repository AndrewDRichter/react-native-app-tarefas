import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Tarefa from './src/tarefa';


export default function App() {
  const [tarefa, setTarefa] = useState('');

  const [list, setList] = useState([
    {
      key: '1',
      item: 'Comprar pao'
    },
    {
      key: '2',
      item: 'Estudar React Native'
    },
  ])

  function handleAdd() {
    alert(tarefa)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.tarefaContainer}>
        <TextInput
          style={styles.input}
          placeholder="Descreva a tarefa"
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        ></TextInput>
        <TouchableOpacity style={styles.submitBtn} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color={'#FFF'} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Tarefa data={item} />}
        style={styles.list}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFF',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  tarefaContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  input: {
    width: '75%',
    backgroundColor: '#FFF',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  submitBtn: {
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  list: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingStart: '4%',
    paddingEnd: '4%',
  }
})