import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const NewSetInput = () => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const addSet = () => {
    console.warn("Add Set", reps, weight);
    setReps("");
    setWeight("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        onChangeText={setReps}
        placeholder="Reps"
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={addSet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
  },
  input: {
    borderColor: "gainsboro",
    borderWidth: 1,
    flex: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default NewSetInput;
