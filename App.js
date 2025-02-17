// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import "expo-router/entry"
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import List from "./List";
export default function App() {
  const [newTask, setnewTask] = useState("");
  const [textInput, setTextInput] = useState("Enter text and hit Enter");
  const submitEdit = () => {
    setnewTask(textInput);
    setTextInput("Enter text and hit Enter");
  };
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={[styles.container, { width, height }]}>
      <StatusBar style="auto" backgroundColor="#204c4c" />
      <View style={styles.wrapper}>
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
            onFocus={() => setTextInput("")}
          />
        </View>
        <View style={styles.body}>
          <List task={newTask} setnewTask={setnewTask} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    minWidth: "95%",
  },
  textInput: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#cdcdcd",
    borderRadius: 9,
    height: "100%",
  },
  inputArea: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#204c4c",
    padding: 10,
    borderColor: "#cccebd",
    borderWidth: 3,
    // width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#204c4c",
    alignItems: "center",
    width: "100%",
  },
  header: {
    flex: 1,
    backgroundColor: "#cccebd",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 9,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // width: "100%",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#204c4c",
  },
  body: {
    flex: 10,
    backgroundColor: "#cccebd",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },
});
