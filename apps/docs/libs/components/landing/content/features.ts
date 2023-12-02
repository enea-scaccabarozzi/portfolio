import { IFeature } from '../../../types/feature';
import LightningIconDark from '../../../../public/landing/features/lightning-dark.svg';
import LightningIconLight from '../../../../public/landing/features/lightning-light.svg';
import FingerprintIconDark from '../../../../public/landing/features/fingerprint-dark.svg';
import FingerprintIconLight from '../../../../public/landing/features/fingerprint-light.svg';
import CloudIconDark from '../../../../public/landing/features/cloud-dark.svg';
import CloudIconLight from '../../../../public/landing/features/cloud-light.svg';
import RefreshIconDark from '../../../../public/landing/features/refresh-dark.svg';
import RefreshIconLight from '../../../../public/landing/features/refresh-light.svg';
import ArrowsExpandIconDark from '../../../../public/landing/features/arrows-expand-dark.svg';
import ArrowsExpandIconLight from '../../../../public/landing/features/arrows-expand-light.svg';
import BeakerIconDark from '../../../../public/landing/features/beaker-dark.svg';
import BeakerIconLight from '../../../../public/landing/features/beaker-light.svg';

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
