import { Stack } from "expo-router";
import "../constants/styles.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
