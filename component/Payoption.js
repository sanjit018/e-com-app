import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
const Payoption=({name,unique})=>{
    const [fill,setFill] = useState(false)
    const handlePress=(item)=>{
        if(unique===item)
        {
            setFill((prev) => !prev);
        }
    }
    return (
      <TouchableOpacity
        style={{
          height: 70,
          borderWidth: 1,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}
        nativeID={unique}
        onPress={()=>{handlePress(unique)}}
      >
        <View style={{ padding: 5 }}>
          <Image
            source={require('../img/mastercard-symbol-02.jpg')}
            style={{ height: 60, width: 100 }}
          />
        </View>
        <View>
          <Text>{name}</Text>
        </View>
        <View
          style={{
            marginRight: 10,
            borderWidth: 1,
            borderRadius: 15,
            padding: 1,
          }}
          
        >
          <FontAwesomeIcon
            icon={faCircle}
            color={fill ? '#FFB547' : '#fff'}
            size={30}
          />
        </View>
      </TouchableOpacity>
    );
}
export default Payoption;