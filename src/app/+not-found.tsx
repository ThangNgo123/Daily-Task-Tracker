import { Link, Stack } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Card.Cover
          style={styles.image}
          source={require("../../assets/not-found.png")}
        />
        <Text variant="headlineSmall">Your page didnt respond.</Text>
        <View style={styles.textDescription}>
          <Text variant="bodyMedium">
            The page doesn't exist or maybe fall a sleep!
          </Text>
          <Text variant="bodyMedium">We suggest you back to home</Text>
        </View>
        <Link href={"/"}>
          <Button mode="contained" buttonColor="blue">
            Go to home screen
          </Button>
        </Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textDescription: {
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
