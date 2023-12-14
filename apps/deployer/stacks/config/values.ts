import { IConfig } from './types';

export const CONFIG_VALUES: IConfig = {
  secrets: [{ name: 'NEXTAUTH_SECRET' }],
  parameters: [
    {
      name: 'DATABASE_URL',
      value: {
        dev: 'file:./db.sqlite',
        prod: 'file:./db.sqlite',
        staging: 'file:./db.sqlite',
      },
    },
    {
      name: 'NEXTAUTH_URL',
      value: {
        dev: 'http://localhost:3000',
        prod: 'https://me.eneascaccabarozzi.xyz',
        staging: 'https://staging-me.eneascaccabarozzi.xyz',
      },
    },
  ],
};
