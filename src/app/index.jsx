import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../../src/components/ExcersiceListItem";

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
