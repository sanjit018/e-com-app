import React, { useState } from "react";
import Starter from "./screen/Starter";
import Register from "./screen/Register";
import Login from "./screen/Login";
import Forgot from "./screen/Forgot";
import Reset from "./screen/Reset";
import Home from "./screen/Home";
import Details from "./screen/Details"
import Cart from "./screen/Cart"
import Payment from "./screen/Payment"
import Pin from "./screen/Pin"
import Order from "./screen/Order"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, TextInput, TouchableOpacity, View,Text, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
const Stack=createNativeStackNavigator();
export default function App(){
  const [search, setSearch] = useState('');
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Starter">
        <Stack.Screen 
          name="Starter" 
          component={Starter}
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{ headerShown: false,animation:'slide_from_left' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false,animation:'slide_from_right'}} 
        />
        <Stack.Screen 
          name="Forgot" 
          component={Forgot}
          options={{ headerShown: false,animation:'slide_from_right'}} 
        />
        <Stack.Screen 
          name="Reset" 
          component={Reset}
          options={{ headerShown: false,animation:'slide_from_right'}} 
        />
        <Stack.Screen 
        name="Details" 
        component={Details}
        options={{ headerShown: false,animation:'slide_from_right'}} 
        />
        <Stack.Screen 
          name="Order" 
          component={Order}
          options={({navigation})=>({
            headerTitle:()=>(
              <View>
                <Text style={{textAlign:'center', fontSize:25,fontWeight:600}}>My Order</Text>
              </View>
            ),headerLeft:()=>(
              <TouchableHighlight
                  style={{
                    backgroundColor: '#FFB547',
                    padding: 5,
                    borderTopEndRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                  onPress={() => navigation.navigate('Pin')}
                  underlayColor="#e0a63a"
                >
                  <FontAwesomeIcon icon={faAngleLeft} size={30} color="#000" />
                </TouchableHighlight>
            ),
            headerShown: true,
            animation:'fade_from_bottom'
          })} 
        />
        <Stack.Screen 
          name="Pin" 
          component={Pin}
          options={({navigation})=>({
            headerShown: true,animation:'slide_from_right',
            headerTitle:()=>(
              <View>
                <Text style={{ fontSize: 25, fontWeight: '700',marginLeft:20 }}>Enter Your Pin</Text>
              </View>
            ),
            headerLeft: () => (
                <TouchableHighlight
                  style={{
                    backgroundColor: '#FFB547',
                    padding: 5,
                    borderTopEndRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                  onPress={() => navigation.navigate('Payment')}
                  underlayColor="#e0a63a"
                >
                  <FontAwesomeIcon icon={faAngleLeft} size={30} color="#000" />
                </TouchableHighlight>
              ),
          })} 
        />
          <Stack.Screen 
            name="Cart" 
            component={Cart}
            options={({ navigation }) => ({ 
              headerShown: true,
              animation: 'slide_from_right',
              headerTitle: () => (
                <View>
                  <Text style={{ fontSize: 25, fontWeight: '700',marginLeft:20 }}>My Cart</Text>  
                </View>
              ),
              headerLeft: () => (
                <TouchableHighlight
                  style={{
                    backgroundColor: '#FFB547',
                    padding: 5,
                    borderTopEndRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                  onPress={() => navigation.navigate('Home')}
                  underlayColor="#e0a63a"
                >
                  <FontAwesomeIcon icon={faAngleLeft} size={30} color="#000" />
                </TouchableHighlight>
              ),
            })}
          />
        <Stack.Screen 
            name="Payment" 
            component={Payment}
            options={({navigation}) => ({ 
              headerShown: true,
              animation: 'slide_from_right',
              headerTitle: () => (
                <View>
                  <Text style={{ fontSize: 25, fontWeight: '700',marginLeft:20 }}>Payment Method</Text>  
                </View>
              ),
              headerLeft: () => (
                <TouchableHighlight
                  style={{
                    backgroundColor: '#FFB547',
                    padding: 5,
                    borderTopEndRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                  onPress={() => navigation.goBack()}
                  underlayColor="#e0a63a"
                >
                  <FontAwesomeIcon icon={faAngleLeft} size={30} color="#000" />
                </TouchableHighlight>
              ),
            })}
          />
        <Stack.Screen 
          name="Home" 
          options={{headerTitle: () => (
            <View style={styles.searchContainer}>
              <FontAwesomeIcon icon={faSearch} size={18} color="#888" />
              <TextInput
                placeholder="Search products..."
                value={search}
                onChangeText={setSearch}
                style={styles.searchInput}
                placeholderTextColor="#171616ff"
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => console.log('Menu pressed')} // or open drawer
              style={styles.menuButton}
            >
              <FontAwesomeIcon icon={faBars} size={22} color="#333" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          animation: 'slide_from_right',}} 
        >{({navigation}) => <Home searchQuery={search} navigation={navigation} />}</Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    // <Payment />
  )
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 12,
    width: 250,
    height: 36,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 8,
  },
  menuButton: {
    marginLeft: 10,
    padding: 5,
  },
});