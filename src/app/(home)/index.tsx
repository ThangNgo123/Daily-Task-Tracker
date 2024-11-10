import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { getAllTasks, storeTasksList, Task } from "../../store/task";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getAllTasks();
      if (tasks === null) {
        await storeTasksList();
      }
      setTasks(tasks);
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Link href={`/task/${item.id}`}>Open Task</Link>
          </View>
        )}
      />
      <Link href="/404">
        <Text>404</Text>
      </Link>
    </SafeAreaView>
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
