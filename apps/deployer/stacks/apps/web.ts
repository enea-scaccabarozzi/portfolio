import { NextjsSite, StackContext, use } from 'sst/constructs';

import { Configs } from '../config';

export const Web = ({ app, stack }: StackContext) => {
  const web = new NextjsSite(stack, 'web', {
    bind: [...use(Configs).config],
    path: './apps/web',
  });

  stack.addOutputs({
    url: web.url,
  });
};
