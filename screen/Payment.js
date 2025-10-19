import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Payoption from "../component/Payoption"
import Btn from "../component/Btn";
const Payment=({navigation})=>{
    return (
      <View style={{ flex: 1, backgroundColor: '#fff',paddingHorizontal:30 }}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'#fff'}
          hidden={false}
        />
        <View style={styles.price}>
          <Text style={{ fontSize: 20 }}>Total amount to be paid</Text>
          <Text style={{ fontSize: 20 }}>$ 10000.00</Text>
        </View>
        <View style={{marginBottom:220}}>
          <Payoption name={"Master Card"} unique={"2"} />
          <Payoption name={"Rupay Card"} unique={"1"} />
        </View>
        <Btn text={"Confirm"} val={"Pin"} navigation={navigation} />
      </View>
    );
}
const styles=StyleSheet.create({
    price:{paddingHorizontal:20,height:120,justifyContent:'center',alignItems:'center'},
})
export default Payment;
