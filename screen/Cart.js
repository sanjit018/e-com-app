import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CartItem from "../component/CartItem"
import Btn from "../component/Btn"
const Cart = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12 }}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'#fff'}
      />
      <ScrollView horizontal={false}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      <View style={{paddingVertical:30,paddingHorizontal:20}}>
        <Text style={{fontSize:20,marginBottom:10,fontWeight:700}}>Total Price : $10000.00</Text>
        <Btn text={"Checkout"} val={"Payment"} navigation={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 cartCont:{borderColor:'#000',
    borderWidth:1,
    width:'100%',
    height:120,
    flexDirection:'row',
    justifyContent:'space-evenly'
}
});
export default Cart;
