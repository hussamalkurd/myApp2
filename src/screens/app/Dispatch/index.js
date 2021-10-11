import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import InputDispatch from '../../../components/InputDispatch';
import {
  faMailBulk,
  faUser,
  faPhone,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import {SearchBar} from 'react-native-elements';
import setAppRoot from '../../../navigation/roots';
import colors from '../../../styles/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Reviews from '../Reviews';
import Leaderboard from '../Leaderboard';
import Details from '../Details';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/RNIMigration';
const Tab = createMaterialTopTabNavigator();

//import MainTabScreen from '../MainTabScreen';
const Drawer = createDrawerNavigator();

const Dispatch = (props) => {
  const {doLogin, onBoardingComplete, isLoggedIn} = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaProvider>
      <View>
        <SearchBar

          inputContainerStyle={{
            backgroundColor: '#42D2DA',
            borderRadius: 15,
            marginLeft: 30,
            marginRight: 30,
            height: 40,
          }}
          leftIconContainerStyle={{backgroundColor: '#42D2DA'}}
          inputStyle={{backgroundColor: '#42D2DA'}}
          containerStyle={{
            backgroundColor: '#00C2CD',
            justifyContent: 'space-around',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            height: 70,
          }}
          searchIcon={{color: '#FFFFFF'}}
          placeholderTextColor="#FFFFFF"
          placeholder="Type Something..."
          onChangeText={(text) => {}}
          onPressCancel={() => {}}
          onPress={() => alert('onPress')}
        />
      </View>
      <Tab.Navigator>
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="trophy" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Reviews"
          component={Reviews}
          options={{
            tabBarLabel: 'Reviews',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="star" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      <View style={localStyles.contentContainer}>
        <View style={localStyles.topContainer} />
      </View>
    </SafeAreaProvider>
  );
};

const localStyles = StyleSheet.create({
  //contentContainer: {flex: 1},
  topContainer: {
    backgroundColor: colors.primary.main,
    justifyContent: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.primary.main,
    alignItems: 'center',
    paddingVertical: 10,
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
  TextStyle: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  buttonContainer: {width: '70%'},
  buttonText: {fontWeight: 'bold'},
});

export default Dispatch;
