import { NextjsSite, StackContext, use } from 'sst/constructs';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

import { Configs } from '../config';

export const Docs = ({ app, stack }: StackContext) => {
  const docs = new NextjsSite(stack, 'docs', {
    bind: [...use(Configs).config],
    path: './apps/docs',
    buildCommand:
      'SKIP_ENV_VALIDATION=true pnpm open-next build --build-command "pnpm nx build docs --skip-nx-cache"',
    customDomain: {
      isExternalDomain: true,
      domainName: `${
        process.env.SST_STAGE === 'staging' ? 'staging-' : ''
      }docs.eneascaccabarozzi.xyz`,
      cdk: {
        certificate: Certificate.fromCertificateArn(
          stack,
          'SslCert',
          'arn:aws:acm:us-east-1:909221929648:certificate/23567966-5942-4f8f-92a9-e1f277474abc'
        ),
      },
    },
  });

  stack.addOutputs({
    url: docs.customDomainUrl ?? docs.url,
  });
};
