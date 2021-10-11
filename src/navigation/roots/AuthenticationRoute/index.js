import {Navigation} from 'react-native-navigation';

const AuthenticationRoute = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Auth.Dispatch',
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

export default AuthenticationRoute;
