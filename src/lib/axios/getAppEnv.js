import environments from '../../configs/environments';
const env = __DEV__ ? environments.dev.key : environments.production.key;
export default env;
