import { type Provider } from 'next-auth/providers';

import { credentials } from './credentials';

export const AppProviders: Provider[] = [credentials];
