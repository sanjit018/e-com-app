import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react"
import { StyleSheet, Text, TouchableOpacity,Image, View } from "react-native";

const Product = ({navigation,productname,price})=>{
  const handlePress = () => {
    // Only navigate if both val and navigation exist
    if (navigation) {
      navigation.navigate("Details");
    }else{
      console.log("Error")
    }
  };
    return (
      <TouchableOpacity style={styles.productcont} onPress={handlePress}>
        <View style={{ height: 170, width: 178, alignItems: 'center' }}>
          <Image
            source={require('../img/chair.jpg')}
            style={{ height: 170, width: 178 }}
          />
        </View>
        <View style={{ height: 80, width: 178, alignItems: 'center' }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              padding: 5,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {productname}
          </Text>
          <View
            style={{ justifyContent: 'space-around', flexDirection: 'row' }}
          >
            <View style={{ marginRight: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: 600 }}>Premium</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesomeIcon icon={faStar} color={'yellow'} />
              <FontAwesomeIcon icon={faStar} color={'yellow'} />
              <FontAwesomeIcon icon={faStar} color={'yellow'} />
              <FontAwesomeIcon icon={faStar} color={'yellow'} />
              <FontAwesomeIcon icon={faStar} color={'yellow'} />
            </View>
          </View>
          <Text
            style={{
              alignSelf: 'flex-start',
              padding: 5,
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            {price}
          </Text>
        </View>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  productcont: {
    width: 178,
    height: 250,
    backgroundColor: '#c8c8c1ff',
    marginLeft: 8,
   marginBottom:8
  },
});
export default Product;