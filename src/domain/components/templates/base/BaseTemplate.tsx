// Every single one of our components is going to follow this exact structure
//  Even if it does not use props it will still export an empty props interface for the component
//  it will allow us to replicate this exact structure across many components and files, and interchange components/imports using the same expected pattern and just find/replace the names of the components
import styles from './BaseTemplate.module.scss';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
