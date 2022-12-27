import { ActivityIndicator, View } from "react-native";
import { styles } from "../styles/Loader";

export default function Loader() {
  return (
    <View
      style={styles.container}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
