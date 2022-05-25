import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Task from "./src/pages/Task/";
import Details from "./src/pages/Details";
import NewTask from "./src/pages/NewTask";

const Stack = createStackNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigation initialRouteName="Lucas-marques">
        <Stack.Screen
          name="Task"
          component={Task}
          options={{ HeaderTintColor: "#f92e6a" }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{ HeaderTintColor: "#f92e6a" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ HeaderTintColor: "#f92e6a" }}
        />
      </Stack.Navigation>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
