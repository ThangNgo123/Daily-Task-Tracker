import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { ToastProvider } from "react-native-toast-notifications";
export default function Home() {
  return (
    <ToastProvider>
      <PaperProvider>
        <View style={styles.container}>
          <Text>Hello Home</Text>
          <Text>Intergration react-native-paper</Text>
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
