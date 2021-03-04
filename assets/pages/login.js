import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../colors';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/login.png')}
          style={{
            width: '100%',
            height: '35%',
            marginTop: 65,
            marginBottom: 20,
          }}
        />
        <Text style={styles.textLogin}>Login!</Text>
        <View style={styles.wrapperContent}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="black"
          />
          <TextInput placeholder="Email" style={{ paddingHorizontal: 10 }} />
        </View>
        <View style={styles.wrapperContent}>
          <Octicons name="key" size={24} color="black" />
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.wrapperUser}>
            <Text style={styles.textUser}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.SignUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  textLogin: {
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 20,
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 1.5,
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    borderColor: colors.primary,
  },
  wrapperUser: {
    marginHorizontal: 55,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: colors.primary,
  },
  textUser: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  SignUp: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: colors.primary,
    paddingVertical: 30,
  },
});

export default LoginScreen;
