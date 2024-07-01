import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import excercises from "./../../assets/data/exercises.json";

export default function ExcerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const excercise = excercises.find((item) => item.name === params.name);
  if (!excercise) {
    <Text>Item not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: excercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}> {excercise.name} </Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{excercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{excercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions}>{excercise.instructions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 4,
  },
  panel: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 16,
  },
  exerciseName: { fontSize: 25, fontWeight: "700" },
  exerciseSubtitle: { color: "dimgrey" },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 25,
  },
});
