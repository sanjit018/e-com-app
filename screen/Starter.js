import React from 'react';
import {ImageBackground,StatusBar,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import Btn from "../component/Btn"
const Starter = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={require('../img/madecom-luxe-maximalist-dion-sofa_sq 1.png')}
        style={{ flex: 1, backfaceVisibility: 'visible' }}
      >
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} hidden={true} />
        <View style={styles.main}>
          <Text style={styles.title}>Find High Quality Furniture</Text>
        </View>
        <View style={styles.main}>
          <Btn text="Let's Go" val="Register" navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: '#563208',
    fontFamily: 'serif',
  },
});
export default Starter;
