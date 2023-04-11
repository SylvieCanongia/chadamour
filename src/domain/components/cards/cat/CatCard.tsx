import Image from 'next/image';
import Link from 'next/link';
import { ImgProps } from '@/types/ImgProps';
import styles from './CatCard.module.scss';

export interface ICatCard {
  tag: string;
  tagColor: string;
  title: string;
  // body: string;
  author: string;
  time: string;
  cardImage: ImgProps;
  userImage: ImgProps;
}

const CatCard: React.FC<ICatCard> = ({
  tag,
  tagColor,
  title,
  author,
  time,
  cardImage,
  userImage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card__box}>
        <div className={styles.card}>
          <div className={styles.card__header}>
            <Link href="/" className={styles.card__link}></Link>
            <Image
              src={cardImage.src}
              alt={cardImage.alt}
              className={styles.card__image}
              width={cardImage.width}
              height={cardImage.height}
            />
          </div>
          <div className={styles.card__content}>
            <div className={styles.card__body}>
              <span className={`${styles.tag} ${styles[tagColor]}`}>{tag}</span>
              <h2>{title}</h2>
              {/* <p>{body}</p> */}
            </div>
            <div className={styles.card__user}>
              <div className={styles.user}>
                <Image
                  src={userImage.src}
                  alt={userImage.alt}
                  className={styles.user__image}
                  width={userImage.width}
                  height={userImage.height}
                />
                <div className={styles.user__info}>
                  <h5>{author}</h5>
                  <small>{time}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
