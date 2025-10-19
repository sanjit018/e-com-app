import { faCircleCheck, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CartItem = () => {
  return (

        <View style={styles.cartCont}>
          <View style={{ width: 90, height: 120 }}>
            <Image
              source={require('../img/chair.jpg')}
              style={{ width: 90, height: 115 }}
            />
          </View>
          <View
            style={{
              width: 170,
              height: 120,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Office Chair</Text>
            <Text>Premium</Text>
            <Text>$ 10000.00</Text>
          </View>
          <View
            style={{
              width: 50,
              height: 120,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              size={25}
              style={{ marginVertical: 20 }}
              color="#FFB547"
            />
            <FontAwesomeIcon
              icon={faTrash}
              size={25}
              style={{ marginVertical: 20 }}
              color="red"
            />
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
    justifyContent:'space-evenly',
    marginVertical:5
}
});
export default CartItem;
