import environments from '../../configs/environments';
import env from './getAppEnv';

const baseUrl = environments[env].apiUrl;

export default baseUrl;
