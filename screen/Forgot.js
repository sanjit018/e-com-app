import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from "../component/Input"
import Btn from "../component/Btn"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
const Forgot=({navigation})=>{
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:300}}>
          <Image source={require('../img/Group.png')} tintColor={'#FFB547'} />
        </View>
        <Text style={{textAlign:'center',fontSize:28,fontWeight:600}}>Forgot Password</Text>
        <View style={{marginBottom:80}}>
            <Text style={{paddingHorizontal:10}}>Please enter the email associated with your account we will send an email instruction to reset your password</Text>
            <Input title="Email" icon={faLock} placeholder={"Enter your email"}/>
        </View>
            <Btn text={"Submit"} val="Reset" navigation={navigation} />
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:40
    },
    
}) 
export default Forgot;