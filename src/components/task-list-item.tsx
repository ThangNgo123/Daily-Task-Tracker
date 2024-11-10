import { Card, Chip, Icon, IconButton, Menu, Text } from "react-native-paper";
import { Task } from "../store/task";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
export const TaskListItem = ({ task }: { task: Task }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Link asChild href={`/task/${task.id}`}>
      <Card key={task.id} mode="outlined" style={styles.cardContainer}>
        <Card.Title
          titleStyle={{ fontWeight: "bold" }}
          title={task.title}
          right={() => (
            <Menu
              visible={visible}
              onDismiss={() => setVisible(false)}
              anchor={
                <IconButton
                  icon="dots-horizontal"
                  onPress={() => setVisible(true)}
                />
              }
            >
              <Menu.Item onPress={() => {}} title="Add task" />
              <Menu.Item onPress={() => {}} title="Edit task" />
              <Menu.Item onPress={() => {}} title="Delete task" />
            </Menu>
          )}
        />

        <Card.Content>
          <View
            style={[
              styles.priorityStyle,
              styles[`background_${task.priority}`],
            ]}
          >
            <Text style={{ fontWeight: "bold" }}> {task.priority}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Ionicons name="today-outline" size={20} />
            <Text style={{ fontWeight: "bold" }}>{task.deadline}</Text>
          </View>
        </Card.Content>
      </Card>
    </Link>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginBottom: 15,
    marginHorizontal: 12,
  },
  priorityStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  background_Low: {
    backgroundColor: "#90EE90",
  },
  background_Medium: {
    backgroundColor: "#FFD700",
  },
  background_High: {
    backgroundColor: "#FF6347",
  },
});
