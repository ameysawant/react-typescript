import Card from "./Card";

const Functions = () => {
  return (
    <>
      <Card title={"Shampoo"} text={"some description"} price={50}>
        my children 1
      </Card>
      <Card title={"Shampoo"} price={50}>
        my children 2
      </Card>
      <Card title={"Shampoo"} price={50}>
        my children 3
      </Card>
    </>
  );
};

export default Functions;
