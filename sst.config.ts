import { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'Portfolio',
      region: 'eu-west-1',
      profile: 'personal',
    };
  },
  stacks(app) {
    app.stack(function Root({ stack }) {
      const web = new NextjsSite(stack, 'web', {
        path: './apps/web',
      });

      const docs = new NextjsSite(stack, 'docs', {
        path: './apps/docs',
      });

      stack.addOutputs({
        WebUrl: web.url,
        DocsUrl: docs.url,
      });
    });
  },
} satisfies SSTConfig;
