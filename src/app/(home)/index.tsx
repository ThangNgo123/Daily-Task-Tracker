import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { getAllTasks, storeTasksList, Task } from "../../store/task";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListHeader } from "../../components/list-header";
import { TaskListItem } from "../../components/task-list-item";
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
        renderItem={({ item }) => <TaskListItem task={item} />}
        ListHeaderComponent={ListHeader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});
