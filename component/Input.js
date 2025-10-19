import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native";
const Input=({title,placeholder,icon,ispassword})=>{
    return (
      <View style={{marginVertical:18}}>
        <Text style={{ fontWeight: 600,marginBottom:8 }}>{title} </Text>
        <TextInput
          placeholder={placeholder}
          backgroundColor="#faf7f7ff"
          placeholderTextColor={'#000000'}
          color="#000"
          style={styles.input}
          secureTextEntry={ispassword}
        />
        <FontAwesomeIcon
          icon={icon}
          style={{ marginTop: -32, marginLeft: 10 }}
          size={20}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 65,
    borderRadius: 8,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  }
});
export default Input;