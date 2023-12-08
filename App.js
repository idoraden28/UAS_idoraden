import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './store'
import {
  HomePage,
  LoginScreen,
  SplashScreen,
  Account,
  ListAccount,
  Task,
  ListTask,
  EditTask,
  EditAccount
} from './screens'
const Stack = createStackNavigator();
 function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage}options={{ headerShown: false }} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ListAccount" component={ListAccount} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="ListTask" component={ListTask} />
        <Stack.Screen name="EditTask" component={EditTask} />
        <Stack.Screen name="EditAccount" component={EditAccount} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default App