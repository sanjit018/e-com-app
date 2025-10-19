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
const Reset=({navigation})=>{
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:300}}>
          <Image source={require('../img/Group.png')} tintColor={'#FFB547'} />
        </View>
        <Text style={{textAlign:'center',fontSize:28,fontWeight:600}}>Reset Password</Text>
        <View style={{marginBottom:80}}>
            <Input title="New Password" icon={faLock} placeholder={"Enter New Password"} ispassword={true}/>
            <Input title="Confirm Password" icon={faLock} placeholder={"Enter Confirm Password"} ispassword={true}/>
        </View>
            <Btn text="Submit" val="Home" navigation={navigation} />
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
export default Reset;