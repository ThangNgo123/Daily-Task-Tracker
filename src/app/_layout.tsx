import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
  return (
    <ToastProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen
            name="(home)"
            options={{ headerShown: false, title: "Home" }}
          />
          <Stack.Screen
            name="task"
            options={{
              headerShown: false,
              title: "Task",
            }}
          />
        </Stack>
      </PaperProvider>
    </ToastProvider>
  );
}
