import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import Logo from '../images/logokohvi.png';
import Logo2 from '../images/LogoEveryoneCoffee.png';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);
  }, [navigation]);

  return (
    <ImageBackground style={styles.background}>
      <Image source={Logo} style={styles.logo} />
      <Image source={Logo2} style={styles.logo2} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 166,
    height: 55,
  },
  logo2: {
    width: 300,
    height: 105,
  },
});
