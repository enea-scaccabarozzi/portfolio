// import Image from 'next/image';

// type NextImageSrc = Parameters<typeof Image>[0]['src'];
type NextImageSrc = string;

export type IFeature = {
  name: string;
  description: string;
  iconDark: NextImageSrc;
  iconLight: NextImageSrc;
};
