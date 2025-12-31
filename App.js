import { ActionSheetIOS, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { useContext } from "react";

import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppStack from "./navigation/AppStack";
import LoginScreen from "./screens/LoginScreen";
import { store } from "./store/store";

function RootNavigator() {
  const { user } = useContext(AuthContext);

  return user ? <AppStack /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
}
