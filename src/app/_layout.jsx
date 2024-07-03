import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function RootLayout() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Exercises" }} />
      </Stack>
    </QueryClientProvider>
  );
}
