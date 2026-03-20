import { View, Text, StyleSheet } from "react-native";

export default function SectionHeader({ title }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.more}>View all</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  more: {
    color: "orange",
  },
});