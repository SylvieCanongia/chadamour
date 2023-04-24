import { IHero } from './Hero';
import heroCatImg from './hero-cat-1440x730.jpg'

const base: IHero = {
  heroText: 'Parce que les chats sont des amours',
  heroImg: {
    src: heroCatImg,
    alt: 'Image de chat de l\'en-tête',
    width: 1440,
    height: 730,
  }
};

export const mockHeroProps = {
  base,
};
