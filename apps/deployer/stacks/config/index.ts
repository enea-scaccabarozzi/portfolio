import { Config, StackContext } from 'sst/constructs';

import { CONFIG_VALUES } from './values';
import { addParameter, addSecret } from './helpers';

export const Configs = ({ app, stack }: StackContext) => {
  const parameters: Config.Parameter[] = [];
  const secrets: Config.Secret[] = [];

  CONFIG_VALUES.parameters.forEach((parameter) => {
    parameters.push(addParameter(parameter, stack));
  });

  CONFIG_VALUES.secrets.forEach((secret) => {
    secrets.push(addSecret(secret, stack));
  });

  stack.addOutputs({
    ...parameters.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.value }), {}),
    ...secrets.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: 'SECRET REDACTED' }),
      {}
    ),
  });

  return { config: [...parameters, ...secrets] };
};
