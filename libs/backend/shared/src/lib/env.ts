import { Config } from 'sst/node/config';

export const env = {
  ...Config,
  NODE_ENV: process.env.NODE_ENV,
  CURRENT_STAGE: process.env.SST_STAGE,
};
