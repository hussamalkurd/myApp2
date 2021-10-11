import AuthenticationRoute from './AuthenticationRoute';
import OnboardingRoute from './OnboardingRoute';
import InitRoute from './InitRoute';
import AppRoute from './AppRoute';

const setAppRoot = (route = '') => {
  switch (route.toLowerCase()) {
    case 'app':
      return AppRoute();
    case 'authentication':
      return AuthenticationRoute();
    case 'onboarding':
      return OnboardingRoute();
    default:
      return InitRoute();
  }
};

export default setAppRoot;
