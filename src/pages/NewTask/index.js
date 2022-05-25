import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebaseconfig";
import styles from "../Task/style";

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState(null);

  function addTask() {
    database.collection("Tasks").add({
      description: description,
      status: false,
    });
    navigation.navigate("Task");
  }
  return (
    <View style={styles.container}>
      <Text>Description</Text>
      <Text>Page NewTask</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Ex: Estudar JavaScript"
        onChange={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask();
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
