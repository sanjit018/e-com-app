import { faEnvelope,faLock,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
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
import { faApple, faAppStore, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Register = ({navigation}) => {
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
            Create an account
          </Text>
          <Input title="Name" placeholder="Enter Your Name" icon={faUser} />
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
          <Input
            title="Confirm Password"
            placeholder="Enter Your password"
            icon={faLock}
            isPassword={true}
          />
          <View style={{ marginTop: 20 }}>
            <Btn text="Sign Up" />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: 700,
                fontFamily: 'serif',
                paddingVertical: 25,
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
              <Text style={styles.text}>Already have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.link} onPress={()=>{navigation.navigate("Login")}}>Sign In</Text>
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
    marginTop: 30,
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
export default Register;
