import React from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import SectionHeader from "../components/SectionHeader";

export default function ExplorerScreen() {
  return (
    <FlatList
      style={styles.container}
      data={[]} // 👈 không cần data chính
      keyExtractor={(_, index) => index.toString()}
      renderItem={null}

      ListHeaderComponent={
        <View>
          {/* Title */}
          <Text style={styles.title}>Explorer</Text>

          {/* Search */}
          <TextInput
            placeholder="Search for meals or area"
            style={styles.search}
          />

          {/* 🔹 Top Categories */}
          <SectionHeader title="Top Categories" />
          <FlatList
            data={[1, 2, 3]}
            horizontal
            scrollEnabled={false} // 👈 tránh warning
            keyExtractor={(item) => item.toString()}
            renderItem={() => (
              <View style={styles.categoryItem} />
            )}
          />

          {/* 🔹 Popular Items */}
          <SectionHeader title="Popular Items" />
          <FlatList
            data={[1, 2, 3]}
            scrollEnabled={false}
            keyExtractor={(item) => item.toString()}
            renderItem={() => (
              <View style={styles.popularItem} />
            )}
          />

          {/* 🔹 Sale-off Items */}
          <SectionHeader title="Sale-off Items" />
          <FlatList
            data={[1, 2, 3]}
            horizontal
            scrollEnabled={false}
            keyExtractor={(item) => item.toString()}
            renderItem={() => (
              <View style={styles.saleItem} />
            )}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginVertical: 15,
  },

  categoryItem: {
    width: 100,
    height: 100,
    backgroundColor: "#eee",
    marginRight: 10,
    borderRadius: 10,
  },

  popularItem: {
    height: 80,
    backgroundColor: "#f5f5f5",
    marginBottom: 10,
    borderRadius: 10,
  },

  saleItem: {
    width: 150,
    height: 100,
    backgroundColor: "#ddd",
    marginRight: 10,
    borderRadius: 10,
  },
});