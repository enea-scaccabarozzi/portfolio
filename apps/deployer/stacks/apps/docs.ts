import { NextjsSite, StackContext, use } from 'sst/constructs';

import { Configs } from '../config';

export const Docs = ({ app, stack }: StackContext) => {
  const docs = new NextjsSite(stack, 'docs', {
    bind: [...use(Configs).config],
    path: './apps/docs',
  });

  stack.addOutputs({
    url: docs.url,
  });
};
