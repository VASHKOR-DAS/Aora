import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl font-pblack">Index page</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}
