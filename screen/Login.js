import { faEnvelope,faLock,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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
import { faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
const Login = ({navigation}) => {
const [show,setShow]=useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={'#fff'}
      />
      <View style={{ flex: 1, padding: 20 }}>
        <View style={styles.imgcont}>
          <Image
            source={require('../img/Rectangle 3.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ paddingVertical: 25, paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 15,
            }}
          >
            Welcome Back !
          </Text>
          <Input
            title="Email"
            placeholder="Enter Your Email"
            icon={faEnvelope}
          />
          <Input
            title="Password"
            placeholder="Enter Your password"
            icon={faLock}
            isPassword={true}
          />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{ justifyContent: 'space-between', flexDirection: 'row' }}
              onPress={() => {
                setShow(!show);
              }}
            >
              <View
                style={{ width: 20, height: 20, borderWidth: 1, padding: 1 }}
              >
                {show ? null : (
                  <View
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: '#FFB547',
                    }}
                  ></View>
                )}
              </View>
              <Text style={{ marginLeft: 4 }}>Remember me</Text>
            </TouchableOpacity>
            <Text style={{ color: 'red' }} onPress={()=>{navigation.navigate("Forgot")}}>Forgot Password?</Text>
          </View>
          <View style={{ marginTop: 28 }}>
            <Btn text="Sign In" />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 700,
                fontFamily: 'serif',
                paddingVertical: 35,
              }}
            >
              OR
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <Image source={require('../img/Ellipse 6.png')} />
              <FontAwesomeIcon icon={faFacebook} size={30} color="blue" />
              <FontAwesomeIcon icon={faApple} size={30} color="grey" />
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.link} onPress={()=>{navigation.navigate("Register")}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imgcont: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#555',
    fontSize: 13,
  },
  link: {
    color: '#FFB547',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
export default Login;
