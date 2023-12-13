import { IFeature } from '@portfolio/docs-types';

import LightningIconDark from '../assets/features/lightning-dark.svg';
import LightningIconLight from '../assets/features/lightning-light.svg';
import FingerprintIconDark from '../assets/features/fingerprint-dark.svg';
import FingerprintIconLight from '../assets/features/fingerprint-light.svg';
import CloudIconDark from '../assets/features/cloud-dark.svg';
import CloudIconLight from '../assets/features/cloud-light.svg';
import RefreshIconDark from '../assets/features/refresh-dark.svg';
import RefreshIconLight from '../assets/features/refresh-light.svg';
import ArrowsExpandIconDark from '../assets/features/arrows-expand-dark.svg';
import ArrowsExpandIconLight from '../assets/features/arrows-expand-light.svg';
import BeakerIconDark from '../assets/features/beaker-dark.svg';
import BeakerIconLight from '../assets/features/beaker-light.svg';

export const FEATURES: IFeature[] = [
  {
    name: 'T3 Stack',
    description: `Leverage the latest in web tech for a sleek, fast portfolio.`,
    iconDark: RefreshIconDark,
    iconLight: RefreshIconLight,
  },
  {
    name: 'Independent Frontend',
    description: `Tailor your portfolio's look and feel with ease and flexibility`,
    iconDark: FingerprintIconDark,
    iconLight: FingerprintIconLight,
  },
  {
    name: 'Backoffice Control',
    description: `Easily create and manage content with a dedicated backoffice.`,
    iconDark: LightningIconDark,
    iconLight: LightningIconLight,
  },
  {
    name: 'Full Type Safety',
    description: `Code with confidence using TypeScript for fewer errors.`,
    iconDark: BeakerIconDark,
    iconLight: BeakerIconLight,
  },
  {
    name: 'Extend with Ease',
    description: `Exploit Nx to manage complex projects simply in one organized place.`,
    iconDark: ArrowsExpandIconDark,
    iconLight: ArrowsExpandIconLight,
  },
  {
    name: 'Totally Serverless',
    description: `Enjoy scalable, cost-effective hosting on Aws without the hassle thanks to SST.`,
    iconDark: CloudIconDark,
    iconLight: CloudIconLight,
  },
];
