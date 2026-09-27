type Product = {
  id: number;
  name: string;
  price: number;
};

// type ListProps = {
//   items: number[] | string[] | Product[];
// };

type ListProps<T> = {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
};

export const List = <T,>({ items, renderItems }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{renderItems(item)}</li>
      ))}
    </ul>
  );
};
