import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.production.min";
import database from "../../config/firebaseconfig";
import styles from "../Task/style";

export default function Details(navigation, route) {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const idTask = route.params.id;
  function editTask(description, id) {
    database.collection("Tasks").add(id).update({
      description: descriptionEdit,
    })
    navigation.navigate("Task")
  }

  return (
    <View style={styles.container}>
      <Text>Description</Text>
      <Text>Page NewTask</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Ex: Estudar JavaScript"
        onChange={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(descriptionEdit, idTask);
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
