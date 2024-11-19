import { ItemDataType } from './App';
import styles from './Item.module.css';

type ItemProps = {
  item: ItemDataType;
};

export const Item = ({ item }: ItemProps) => {
  return (
    <figure
      className={`${styles.wrapper} ${
        Math.random() > 0.5 ? styles.top : styles.bottom
      }`}
    >
      <img src={item.src} alt={item.name} />
      <figcaption>
        {item.name} {item.details && `(${item.details})`}
      </figcaption>
    </figure>
  );
};
