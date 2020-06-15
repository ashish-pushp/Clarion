import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetail from './Screens/ProductDetail';
import LoginScreen from './Screens/Login'
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" 
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} 
        options={{
          title: 'Product Detail',
          headerTitleAlign:'center',
          headerTitleStyle :{
            fontSize:16
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;