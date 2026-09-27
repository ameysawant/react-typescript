import List from "./List";

type Fruit = string;
type Price = number;
export type Product = {
  id: number;
  name: string;
  price: number;
};

const fruits: Fruit[] = ["apple", "banana", "orange"];
const prices: Price[] = [99, 199, 299];
const products: Product[] = [
  {
    id: 1,
    name: "tea",
    price: 22,
  },
  {
    id: 1,
    name: "coffe",
    price: 35,
  },
];

const handleFruits = (item: Fruit) => {
  return (
    <>
      <p>{item}</p>
    </>
  );
};
const handlePrices = (item: Price) => {
  return (
    <>
      <span>{item}</span>
    </>
  );
};
const handleProducts = (item: Product) => {
  return (
    <>
      <span>{item.id}</span>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </>
  );
};

const ShowMyList = () => {
  return (
    <>
      <List items={fruits} renderItems={handleFruits} />
      <List items={prices} renderItems={handlePrices} />
      <List items={products} renderItems={handleProducts} />
    </>
  );
};

export default ShowMyList;
