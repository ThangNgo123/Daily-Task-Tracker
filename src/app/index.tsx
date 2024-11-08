import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  AnimatedFAB,
  DataTable,
  PaperProvider,
  Searchbar,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Hello Home</Text>
        <Text>Intergration react-native-paper</Text>
      </View>
    </PaperProvider>
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
