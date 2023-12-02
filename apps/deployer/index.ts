import { StackContext } from 'sst/constructs';

import { Docs } from './stacks/apps/docs';
import { Web } from './stacks/apps/web';
import { Configs } from './stacks/config';

export const RootStack = ({ app, stack }: StackContext) => {
  // Configs Stacks
  app.stack(Configs);

  // Apps Stacks
  app.stack(Docs);
  app.stack(Web);

  stack.addOutputs({
    SST_STAGE: process.env.SST_STAGE,
  });
};
