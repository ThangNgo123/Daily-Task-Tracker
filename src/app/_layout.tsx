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
          <Stack.Screen
            name="priority"
            options={{ headerShown: false, title: "Priority" }}
          />
          <Stack.Screen
            name="add-task"
            options={{ presentation: "modal", title: "Add Task" }}
          />
        </Stack>
      </PaperProvider>
    </ToastProvider>
  );
}
