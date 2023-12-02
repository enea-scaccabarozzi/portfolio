import { NextjsSite, StackContext } from 'sst/constructs';

export const Docs = ({ app, stack }: StackContext) => {
  const docs = new NextjsSite(stack, 'docs', {
    path: './apps/docs',
  });

  stack.addOutputs({
    url: docs.url,
  });
};
