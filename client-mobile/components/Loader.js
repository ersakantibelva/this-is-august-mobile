import { ActivityIndicator, View } from "react-native";

export default function Loader() {
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 20,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
