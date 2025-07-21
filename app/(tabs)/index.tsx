import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.tarefaContainer}>
        <TextInput style={styles.input} placeholder="Descreva a tarefa"></TextInput>
        <TouchableOpacity>
          <FontAwesome name="plus" size={20} />
        </TouchableOpacity>
      </View>
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
    fontSize: 32,
    color: '#FFF',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#121212',
    color: '#FFF',
    width: '60%',
  },
  tarefaContainer: {
    backgroundColor: '#FFF',
    height: 500,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})