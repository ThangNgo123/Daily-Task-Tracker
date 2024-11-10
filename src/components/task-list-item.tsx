import { Card, Chip, Text } from "react-native-paper";
import { Task } from "../store/task";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export const TaskListItem = ({ task }: { task: Task }) => {
  return (
    <Link asChild href={`/task/${task.id}`}>
      <Card mode="outlined" style={styles.cardContainer}>
        <Card.Title title={task.title} />
        <Card.Content>
          <Chip>{task.priority}</Chip>
          <Text>{task.deadline}</Text>
        </Card.Content>
      </Card>
    </Link>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    marginHorizontal: 12,
  },
});
