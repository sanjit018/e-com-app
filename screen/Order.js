import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View, } from "react-native";
import Btn from "../component/Btn";
const Order=({navigation})=>{
    return (
      <View style={{ flex: 1, paddingHorizontal: 40, alignItems: 'center' }}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View style={{ height: '40%', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faLightbulb} color="#FFB547" size={220} />
        </View>
        <View>
          <Text style={{ fontSize: 28, fontWeight: 600, marginBottom: 75 }}>
            Your Order Has Been Accepted
          </Text>
          <Btn text={'Track Order'} />
          <Text style={{ textAlign: 'center', marginTop: 5 }}>
            Order Id :654654656
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderColor: '#FFB547',
            borderWidth: 2,
            paddingVertical: 14,
            width: '90%',
            marginTop: 20,
            borderRadius: 20,
          }}
          onPress={()=>{navigation.navigate("Home")}}
        >
          <Text style={{ textAlign: 'center', color: '#FFB547',fontSize:25 }}>
            Back To Home
          </Text>
        </TouchableOpacity>
      </View>
    );
}
export default Order;