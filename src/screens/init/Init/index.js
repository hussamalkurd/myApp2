import React from 'react';
import {View, Text} from 'react-native';
import setAppRoot from '../../../navigation/roots';
import {connect} from 'react-redux';
//import {NavigationContainer} from '@react-navigation/native';
//mport {createDrawerNavigator} from '@react-navigation/drawer';
//import MainTabScreen from '../../app/MainTabScreen';
//const Drawer = createDrawerNavigator();

const Init = (props) => {
  const {isLoggedIn, onBoardingComplete} = props;
  console.log('test');
  React.useEffect(() => {
    if (isLoggedIn) {
      if (onBoardingComplete) {
        setAppRoot('app');
      } else {
        setAppRoot('onboarding');
      }
    } else {
      setAppRoot('authentication');
    }
  }, [isLoggedIn, onBoardingComplete]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Init screen</Text>
    </View>
  );
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Dispatch" component={MainTabScreen} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
};

const mapStateToProps = (state) => {
  const {auth} = state;
  return {
    isLoggedIn: auth.isLoggedIn,
    onBoardingComplete: auth.onBoardingComplete,
  };
};

export default connect(mapStateToProps, null)(Init);
