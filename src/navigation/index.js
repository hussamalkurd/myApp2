import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {reduxProvider} from '../redux';

// Import styles
import colors from '../styles/colors';

// Import screens
import Login from '../screens/authentication/Login';
import Init from '../screens/init/Init';
import Onboarding from '../screens/onboarding/Onboarding';
import Leaderboard from '../screens/app/Leaderboard';
import Dispatch from '../screens/app/Dispatch';
import Reviews from '../screens/app/Reviews';
import MainTabScreen from '../screens/app/TabScreen';
// Build navigation components
export function registerNavigationComponents() {
  const isAndroid = Platform.OS === 'android';

  // --------------- SCREENS CONFIG -------------------

  Dispatch.options = {
    bottomTab: {
      text: 'Dispatch',
      icon: isAndroid
        ? require('../assets/icons/menu-icon.png')
        : {
            scale: 10,
            uri: 'menu-icon',
          },
    },
  };

  Reviews.options = {
    bottomTab: {
      text: 'Reviews',
      icon: isAndroid
        ? require('../assets/icons/star-icon.png')
        : {
            scale: 10,
            uri: 'star-icon',
          },
    },
  };

  Leaderboard.options = {
    bottomTab: {
      text: 'Leaderboard',
      icon: isAndroid
        ? require('../assets/icons/trophy-icon.png')
        : {
            scale: 10,
            uri: 'trophy-icon',
          },
    },
  };

  // --------------- REGISTER SCREEN ------------------

  const Screens = new Map();
  // Init Screen
  Screens.set('Init', Init);

  // Auth Screens
  Screens.set('Auth.Login', Login);

  // Onboarding Screens
  Screens.set('Onboarding.Onboarding', Onboarding);

  // App Screens
  Screens.set('App.Leaderboard', Leaderboard);
  Screens.set('App.Dispatch', Dispatch);
  Screens.set('App.Reviews', Reviews);
  Screens.set('App.Main', MainTabScreen);
  // Register screens
  Screens.forEach((Component, key) => {
    Navigation.registerComponent(
      key,
      () => gestureHandlerRootHOC(reduxProvider(Component)),
      () => Component,
    );
  });
}

// Define navigation options
export const defaultOptions = {
  statusBar: {
    backgroundColor: colors.primary.main,
    color: colors.white,
  },

  topBar: {
    visible: false,
  },

  bottomTabs: {
    backgroundColor: colors.white,
    titleDisplayMode: 'alwaysShow',
  },

  bottomTab: {
    fontSize: 10,
    selectedFontSize: 10,
    textColor: colors.secondary.light,
    selectedTextColor: colors.primary.main,
    iconColor: colors.secondary.light,
    selectedIconColor: colors.primary.main,
  },
};
