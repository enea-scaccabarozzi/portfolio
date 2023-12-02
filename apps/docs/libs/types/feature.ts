import Image from 'next/image';

type NextImageSrc = Parameters<typeof Image>[0]['src'];

export type IFeature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
};
