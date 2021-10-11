/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {defaultOptions, registerNavigationComponents} from './src/navigation';
import {Navigation} from 'react-native-navigation';
console.log('test');
registerNavigationComponents();
Navigation.setDefaultOptions(defaultOptions);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App.Main',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
});
//AppRegistry.registerComponent(appName, () => App);
