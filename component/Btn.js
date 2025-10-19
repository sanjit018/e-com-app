import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Btn = ({text,val=null,navigation=null})=>{
  const handlePress = () => {
    // Only navigate if both val and navigation exist
    if (navigation && val) {
      navigation.navigate(val);
    }
  };
    return (
      <TouchableOpacity style={styles.button} onPress={handlePress} >
        <Text style={{ fontSize: 18,textAlign:'center',fontWeight:600 }}>{text}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFB547',
    paddingHorizontal: 23,
    borderRadius: 20,
    paddingVertical: 6,
  },
});
export default Btn;