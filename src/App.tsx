import styles from './App.module.css';
import { Item } from './Item';
import items from './data/items.json';

export type ItemDataType = {
  src: string;
  details?: string;
  name: string;
};

function App() {
  return (
    <>
      <h1 className={styles.title}>sharon zheng xmas wishlist</h1>
      <div className={styles.wrapper}>
        {items.map((item: ItemDataType, i: number) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
