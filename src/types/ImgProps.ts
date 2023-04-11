import { StaticImageData } from 'next/image';

export type ImgProps = {
  src: StaticImageData | string;
  alt: string;
  width: number | undefined;
  height: number | undefined;
};
