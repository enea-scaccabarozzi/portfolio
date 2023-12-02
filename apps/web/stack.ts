import { NextjsSite, StackContext } from 'sst/constructs';

export const Web = ({ app, stack }: StackContext) => {
  const web = new NextjsSite(stack, 'web', {
    path: './apps/web',
  });

  stack.addOutputs({
    url: web.url,
  });
};
