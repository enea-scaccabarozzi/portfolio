import { StackContext } from 'sst/constructs';

import { Docs } from './stacks/apps/docs';
import { Web } from './stacks/apps/web';
import { Configs } from './stacks/config';
import { IAM } from './stacks/iam';

export const RootStack = ({ app, stack }: StackContext) => {
  // Configs Stack
  app.stack(Configs);

  // IAM Stack
  app.stack(IAM);

  // Apps Stacks
  app.stack(Docs);
  app.stack(Web);

  stack.addOutputs({
    SST_STAGE: process.env.SST_STAGE,
  });
};
