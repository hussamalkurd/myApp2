import {Navigation} from 'react-native-navigation';

const OnboardingRoute = () =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Onboarding.Onboarding',
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

export default OnboardingRoute;
