import { StackContext } from 'sst/constructs';

import { Docs } from '../docs/stack';
import { Web } from '../web/stack';

export const RootStack = ({ app, stack }: StackContext) => {
  app.stack(Docs);
  app.stack(Web);
};
