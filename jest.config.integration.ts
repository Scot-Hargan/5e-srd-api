import { Config } from '@jest/types';
import baseConfig from './jest.config';

const integrationConfig: Config.InitialOptions = {
  ...baseConfig,
  displayName: 'Integration Tests',
  testRegex: '\\.itest\\.(js|ts)$',
  silent: true,
};

console.log('RUNNING INTEGRATION TESTS');
export default integrationConfig;
