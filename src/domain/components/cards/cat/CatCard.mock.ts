import { ICatCard } from './CatCard';
import catImg from './cat-640x427.jpg';
import avatar from './avatar-woman.png';

const base: ICatCard = {
  tag: 'Félins',
  tagColor: 'tag-blue',
  title: 'Un joli chat',
  // body: `Il est trop mignon 😍 😍 😻`,
  author: 'Sylvie',
  time: 'il y a 2h',
  cardImage: {
    src: catImg,
    alt: 'Logo de Chadamour',
    width: 600,
    height: 400,
  },
  userImage: {
    src: avatar,
    alt: "Avatar de l'utilisateur",
    width: 40,
    height: 40,
  },
};

export const mockCatCardProps = {
  base,
};
