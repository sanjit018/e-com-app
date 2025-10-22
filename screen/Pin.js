import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Btn from '../component/Btn';
const Pin = ({ navigation }) => {

    
        const [otp, setOtp] = useState(['', '', '', '']);
        const inputs = useRef([]);

        const handleChange = (text, index) => {
          if (text.length > 1) text = text.slice(-1); // allow only one digit
          const newOtp = [...otp];
          newOtp[index] = text;
          setOtp(newOtp);

          // Move to next input automatically
          if (text && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
          }
        };
    
    
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center',width:"70%" }}>
        {otp.map((digit,index)=>(  
          <TextInput
            key={index}
            style={styles.inputBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            
            onChangeText={(text) => handleChange(text, index)}
          ></TextInput>
        ))}
          
      </View>
      <View style={{marginVertical:30}}>
        <Text style={{fontSize:17,color:'red'}}>Forgot Pin ?</Text>
      </View>
      <View style={{width:"70%"}}>
        <Btn text={"Submit"} val={"Order"} navigation={navigation} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    color: '#000',
    fontSize: 28,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    flex:1,
    paddingLeft:14
  },
});
export default Pin;
