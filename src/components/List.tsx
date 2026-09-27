import type { Product } from "./ShowMyList";

type ListProps<T> = {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
};
//const abc (a,b)
const List = <T,>({ items, renderItems }: ListProps<T>) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return <li>{renderItems(item)}</li>;
        })}
      </ul>
    </>
  );
};

export default List;
