import styles from './Hero.module.scss';

export interface IHero {
}

const Hero: React.FC<IHero> = () => {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero__image}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__text}>Les chats sont <span>des am<span className={styles.hero__heart}>💖</span>urs </span></h1>
          <button type="button" className={styles.hero__button}><span>Voir les chats</span><i></i></button>
        </div>
        
      </div>
      
    </div>
  )
};

export default Hero;
