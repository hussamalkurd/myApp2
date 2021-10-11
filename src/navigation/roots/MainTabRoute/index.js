import {Navigation} from 'react-native-navigation';

const MainTabRoute = () =>
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

export default MainTabRoute;
