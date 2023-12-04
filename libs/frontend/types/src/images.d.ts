declare module '*.png' {
  const content:
    | {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
        blurWidth?: number;
        blurHeight?: number;
      }
    | string;
  export default content;
}

declare module '*.jpg' {
  const content:
    | {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
        blurWidth?: number;
        blurHeight?: number;
      }
    | string;
  export default content;
}
