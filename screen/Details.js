import { faAngleLeft, faArrowRight, faEnvelope,faHeart,faLock,faShoppingCart,faStar,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Btn from "../component/Btn"
const Details = ({navigation}) => {
const [show,setShow]=useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'#fff'}
      />
      <View style={{ width: '100%', height: '40%' }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 20,
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            paddingHorizontal: 20,
          }}
        >
          <TouchableHighlight
            style={{
              width: 'Auto',
              height: 'Auto',
              backgroundColor: '#FFB547',
              padding: 5,
              borderTopEndRadius: 15,
              borderBottomLeftRadius: 15,
            }}
            onPress={() => navigation.navigate('Home')}
          >
            <FontAwesomeIcon icon={faAngleLeft} size={30} color="#000" />
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: 'Auto',
              height: 'Auto',
              backgroundColor: '#FFB547',
              padding: 5,
              borderTopEndRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <FontAwesomeIcon icon={faHeart} size={30} color="#000" />
          </TouchableHighlight>
        </View>
        <Image
          source={require('../img/chair.jpg')}
          style={{ flex: 1, width: '100%', borderRadius: 20 }}
        />
      </View>
      <View style={{ paddingHorizontal: 13, paddingVertical: 20 }}>
        <Text style={{ fontWeight: 700 }}>Modern Chair</Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text>Comfortable Chair</Text>
          <Text>$ 10000.00</Text>
        </View>
        <Text style={{ fontWeight: 700 }}>Product Details</Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text>Chair Type</Text>
          <Text>Office / Livingroom</Text>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text>Color</Text>
          <Text>Yellow</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 120,
          }}
        >
          <Text>Review</Text>
          <View style={{ flexDirection: 'row' }}>
            <FontAwesomeIcon icon={faStar} color={'yellow'} />
            <FontAwesomeIcon icon={faStar} color={'yellow'} />
            <FontAwesomeIcon icon={faStar} color={'yellow'} />
            <FontAwesomeIcon icon={faStar} color={'yellow'} />
            <FontAwesomeIcon icon={faStar} color={'yellow'} />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 100,
          }}
        >
          <Btn text={'Shop Now'} val="Home" navigation={navigation} />
          <TouchableOpacity onPress={()=>navigation.navigate("Cart")}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              backgroundColor: '#FFB547',
              borderTopEndRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              color={'#fff'}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

});
export default Details;
