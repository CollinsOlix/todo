// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TextInput } from "react-native";
import List from "./List";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
export default function App() {
  const [newTask, setnewTask] = useState("");
  const [textInput, setTextInput] = useState("Enter text and hit Enter");
  const submitEdit = () => {
    setnewTask(textInput);
    setTextInput("Enter text and hit Enter");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#0f1fae" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          editable
          value={textInput}
          maxLength={40}
          style={styles.textInput}
          clearTextOnFocus={true}
          onChangeText={(textInput) => setTextInput(textInput)}
          onSubmitEditing={() => submitEdit()}
        />
      </View>
      <View style={styles.body}>
        <List task={newTask} setnewTask={setnewTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#cecead",
  },
  inputArea: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#203b3b",
    padding: 10,
    width: 330,
  },
  container: {
    flex: 1,
    backgroundColor: "#204c4c",
    alignItems: "center",
  },
  header: {
    flex: 1,
    backgroundColor: "#ecaebd",
    width: 330,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6e6e5d",
  },
  body: {
    flex: 10,
    width: 330,
    backgroundColor: "#ecaebd",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
});
