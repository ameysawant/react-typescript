import Basics from "./components/Basics";
import Button from "./components/Button";
import Forms from "./components/Forms";
import Functions from "./components/Functions";
import Parent from "./components/Parent";
import States from "./components/States";

const App = () => {
  const handleClick = () => {
    console.log(45);
    return 45;
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
      <Parent />
    </>
  );
};

export default App;
