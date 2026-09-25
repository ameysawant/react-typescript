import { useState } from "react";
import Button from "./Button";

type Name = string;
type Age = number;
type Visibility = boolean;
type Hobbies = string[];
type HobbyInput = string;
type SpiderMan = {
  name: string;
  age: number;
};

const States = () => {
  const [name, setName] = useState<Name>("");
  const [age, setAge] = useState<Age>(0);
  const [visible, setVisible] = useState<Visibility>(false);
  const [hobbies, setHobbies] = useState<Hobbies>(["cricket"]);
  const [hobbyInput, setHobbyInput] = useState<HobbyInput>("");
  const [spiderMan, setSpiderMan] = useState<SpiderMan>({
    name: "",
    age: 0,
  });

  const handleMyAge = () => {
    setAge((prev) => prev + 1);
  };

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  const addHobby = () => {
    setHobbies((prev) => [...prev, hobbyInput]);
    setHobbyInput("");
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpiderMan((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpiderMan((prev) => ({ ...prev, age: Number(e.target.value) }));
  };

  return (
    <>
      <h2>States</h2>
      <p>Name example</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      {name || "No name"}

      <p>Age example</p>
      <Button variant="primary" size="sm" onClick={handleMyAge}>
        Increase my Age
      </Button>
      {age}

      <p>Visible example</p>
      <Button variant="primary" size="sm" onClick={handleToggle}>
        {visible ? "Hide" : "Show"}
      </Button>
      {visible ? "visible" : "not visible"}

      <p>Array example</p>
      <input
        type="text"
        placeholder="hobby"
        onChange={(e) => setHobbyInput(e.target.value)}
        value={hobbyInput}
      />
      <Button variant="primary" size="sm" onClick={addHobby}>
        add hobby
      </Button>
      {hobbies.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}

      <p>Object example</p>
      <input
        type="text"
        placeholder="name"
        value={spiderMan.name}
        onChange={handleName}
      />
      <input
        type="text"
        placeholder="age"
        value={spiderMan.age}
        onChange={handleAge}
      />
      {spiderMan.name}
      {spiderMan.age}
    </>
  );
};

export default States;
