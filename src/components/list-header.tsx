import { Link } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const prioritys = ["Low", "Medium", "High"];
export const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTop}>
        <View style={styles.textHeaderTop}>
          <Ionicons name="layers-outline" size={24} color="black" />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 26 }}>Task List</Text>
      </View>
      <View>
        <FlatList
          data={prioritys}
          horizontal
          renderItem={({ item }) => (
            <Link href={`/priority/${item}`}>
              <Button mode="outlined">{item}</Button>
            </Link>
          )}
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 8,
            marginBottom: 10,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    gap: 20,
    marginHorizontal: 12,
  },
  textHeaderTop: {
    backgroundColor: "pink",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  headerTop: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
