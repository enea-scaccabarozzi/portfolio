type StaticImage = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

declare module '*.png' {
  const content: StaticImage | string;
  export default content;
}

declare module '*.jpg' {
  const content: StaticImage | string;
  export default content;
}
