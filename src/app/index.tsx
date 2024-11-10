import { StyleSheet, Text, View } from "react-native";
import { Button, PaperProvider } from "react-native-paper";
import { Toast, ToastProvider } from "react-native-toast-notifications";
export default function Home() {
  return (
    <ToastProvider>
      <PaperProvider>
        <View style={styles.container}>
          <Text>Hello Home</Text>
          <Text>Intergration react-native-paper</Text>
          <Button
            mode="contained"
            onPress={() => {
              Toast.show("Hello Toast");
            }}
          >
            Toast
          </Button>
        </View>
      </PaperProvider>
    </ToastProvider>
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
