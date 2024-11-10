import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Link href={"/"}>
          <Button mode="contained">Go to home screen</Button>
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
