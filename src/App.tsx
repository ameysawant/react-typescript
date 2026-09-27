import Basics from "./components/Basics";
import Button from "./components/Button";
import Forms from "./components/Forms";
import Functions from "./components/Functions";
import Parent from "./components/Parent";
import Refs from "./components/Refs";
import States from "./components/States";
import { List } from "./components/useApi";

const App = () => {
  const handleClick = () => {
    console.log(45);
    return 45;
  };

  type Fruits = string;
  type Prices = number;
  type Product = {
    id: number;
    name: string;
    price: number;
  };

  const fruits: Fruits[] = ["apple", "banana", "orange"];
  const prices: Prices[] = [99, 199, 299];
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

  const handleFruits = (item: Fruits) => {
    return <p>{item}</p>;
  };
  const handlePrices = (item: Prices) => {
    return <p>{item}</p>;
  };
  const handleProducts = (item: Product) => {
    return (
      <>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </>
    );
  };

  return (
    <>
      {/* <Basics /> */}
      {/* <Functions /> */}
      {/* <Button variant="primary" size="sm" onClick={handleClick} type="submit">
        Save 1
      </Button>
      <Button variant="primary" size="sm" onClick={handleClick} type="button">
        Save 2
      </Button>
      <Button variant="primary" size="sm">
        Save 3
      </Button> */}
      {/* <States /> */}
      {/* <Forms /> */}
      {/* <Parent /> */}
      {/* <Refs /> */}

      <h3>Fruits</h3>
      <List items={fruits} renderItems={handleFruits} />

      <h3>Prices</h3>
      <List items={prices} renderItems={handlePrices} />

      <h3>Products</h3>
      <List items={products} renderItems={handleProducts} />
    </>
  );
};

export default App;
