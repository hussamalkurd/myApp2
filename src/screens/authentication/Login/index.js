import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {faFingerprint, faUser} from '@fortawesome/free-solid-svg-icons';

// Import redux
import {connect} from 'react-redux';
import {LOGIN_ACTION} from '../../../redux/actions/auth';

import Input from '../../../components/Input';

import colors from '../../../styles/colors';

import setAppRoot from '../../../navigation/roots';
import {NavigationContainer} from '@react-navigation/native';

const Login = (props) => {
  const {doLogin, onBoardingComplete, isLoggedIn} = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaProvider>
      <View style={localStyles.contentContainer}>
        <View style={localStyles.topContainer}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={localStyles.logo}
          />
        </View>
        <View style={localStyles.bottomContainer}>
          <View style={localStyles.formContainer}>
            <Input
              id="username"
              label="Username"
              required
              autoCapitalize="none"
              formControlStyle={{marginBottom: 12}}
              icon={faUser}
              value={username}
              onChangeText={(text) => setUsername(text)}
              onInfoPressed={() => {}}
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              autoCapitalize="none"
              formControlStyle={{marginBottom: 24}}
              icon={faFingerprint}
              value={password}
              onChangeText={(text) => setPassword(text)}
              onInfoPressed={() => {}}
            />
          </View>
          <View style={localStyles.buttonContainer}>
            <TouchableOpacity
              onPress={async () => {
                // use username and password to do login
                try {
                  await doLogin(username, password);
                  if (onBoardingComplete) {
                    await setAppRoot('app');
                  } else {
                    await setAppRoot('onboarding');
                  }
                } catch (e) {
                  // todo: show error message to the user, invalid credentials
                  console.warn(e);
                }
              }}
              style={localStyles.buttonStyle}>
              <Text style={localStyles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={[localStyles.buttonContainer, {marginTop: 16}]}>
            <TouchableOpacity style={localStyles.linkStyle}>
              <Text style={localStyles.linkTextStyle}>Forgot login?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const localStyles = StyleSheet.create({
  contentContainer: {flex: 1},
  topContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.primary.main,
    alignItems: 'center',
  },
  logo: {width: 220, height: 150, resizeMode: 'contain'},
  formContainer: {
    paddingTop: 32,
    width: '70%',
  },
  buttonStyle: {
    backgroundColor: colors.white,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2,
    elevation: 5,
  },
  linkStyle: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  linkTextStyle: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
  buttonContainer: {width: '70%'},
  buttonText: {fontWeight: 'bold'},
});

const mapStateToProps = (state) => {
  const {auth} = state;
  return {
    isLoggedIn: auth.isLoggedIn,
    onBoardingComplete: auth.onBoardingComplete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: async (username, password) => {
      return await dispatch(LOGIN_ACTION(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
