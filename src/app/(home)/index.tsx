import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello Home</Text>
      <Link asChild href="/task/123">
        <Button mode="contained">Task 123</Button>
      </Link>
    </View>
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
