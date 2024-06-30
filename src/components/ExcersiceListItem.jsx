import { StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exercisecontainer}>
      <Text style={styles.exerciseName}> {item.name} </Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
        <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exercisecontainer: {
    backgroundColor: "#fff",
    padding: 5,
    gap: 5,
    borderRadius: 5,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  exerciseName: { fontSize: 24, fontWeight: "700" },
  exerciseSubtitle: { color: "dimgrey" },
  subValue: {
    textTransform: "capitalize",
  },
});
