import { SSTConfig } from 'sst';

import { RootStack } from './apps/deployer';

export default {
  config(_input) {
    return {
      name: 'Portfolio',
      region: 'eu-west-2',
      profile: 'personal',
    };
  },
  stacks(app) {
    app.stack(RootStack);
  },
} satisfies SSTConfig;
