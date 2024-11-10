import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Priority() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  return (
    <View>
      <Stack.Screen options={{ title: slug }} />
      <Text>Hello priority</Text>
    </View>
  );
}
