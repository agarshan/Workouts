import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import excercises from "./../../assets/data/exercises.json";
import { useState } from "react";

export default function ExcerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(false);

  const excercise = excercises.find((item) => item.name === params.name);
  if (!excercise) {
    <Text>Item not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: excercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}> {excercise.name} </Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{excercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{excercise.equipment}</Text>
        </Text>
      </View>
      <View style={styles.panel}>
        <Text
          numberOfLines={isInstructionsExpanded ? "0" : "3"}
          style={styles.instructions}
        >
          {excercise.instructions}
        </Text>
        <Text
          style={styles.seeMore}
          onPress={() => setIsInstructionsExpanded(!isInstructionsExpanded)}
        >
          {isInstructionsExpanded ? "See less" : "See more"}
        </Text>
      </View>
    </ScrollView>
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
  seeMore: {
    fontWeight: "700",
    alignSelf: "center",
    color: "gray",
    padding: 10,
  },
});
