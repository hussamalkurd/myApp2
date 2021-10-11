import {Navigation} from 'react-native-navigation';

const AppRoute = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App.Leaderboard',
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


export default AppRoute;
