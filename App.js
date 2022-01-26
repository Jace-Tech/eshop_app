// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import Main from './screens/Main'


export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <View style={styles.app}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
});
