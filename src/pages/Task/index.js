import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../src/config/firebaseConfig.js";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style.js";

export default function Task({ navigation }) {
  const [Task, setTask] = useState([]);

  function deleteTask(id) {
    database.collection("Task").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Lucas").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Flatlist
        showVerticalScrollIndicator={false}
        data={Task}
        renderItem={(item) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <FontAwesome name="star" size={23} color="F92e6A"></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  });
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
