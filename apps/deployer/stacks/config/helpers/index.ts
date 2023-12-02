import { Config, Stack } from 'sst/constructs';

import { IParameter, ISecret } from '../types';

export const addParameter = (parameter: IParameter, stack: Stack) => {
  let value = parameter.value.dev;
  if (stack.stage === 'prod') value = parameter.value.prod;
  else if (stack.stage === 'staging') value = parameter.value.staging;

  return new Config.Parameter(stack, parameter.name, {
    value,
  });
};

export const addSecret = (secret: ISecret, stack: Stack) =>
  new Config.Secret(stack, secret.name);
