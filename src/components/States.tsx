import { useState } from "react";
import Button from "./Button";
import type { ChangeEvent } from "react";

type MyName = string;
type MyAge = number;
type Visibility = boolean;
type InputEvent = ChangeEvent<HTMLInputElement>;
type Hobbies = string[];
type HobbyInput = string;
type User = {
  name: string;
  age: number;
};

const States = () => {
  const [myName, setMyName] = useState<MyName>("");
  const [myAge, setMyAge] = useState<MyAge>(0);
  const [visible, setVisible] = useState<Visibility>(false);
  const [hobbies, setHobbies] = useState<Hobbies>(["cricket"]);
  const [hobbyInput, setHobbyInput] = useState<HobbyInput>("");
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
  });

  const handleMyName = (e: InputEvent) => {
    setMyName(e.target.value);
  };

  const handleMyAge = () => {
    setMyAge((prev) => prev + 1);
  };

  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  const handleMyHobby = (e: InputEvent) => {
    setHobbyInput(e.target.value);
  };

  const addHobby = () => {
    setHobbies((prev) => [...prev, hobbyInput]);
    setHobbyInput("");
  };

  const handleUserName = (e: InputEvent) => {
    setUser((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleUserAge = (e: InputEvent) => {
    setUser((prev) => ({ ...prev, age: Number(e.target.value) }));
  };

  return (
    <>
      <h2>States</h2>
      <p>Name Example</p>
      <input
        type="text"
        placeholder="name"
        value={myName}
        onChange={handleMyName}
      />
      {myName}

      <p>Age Example</p>
      <Button variant="primary" size="sm" onClick={handleMyAge}>
        increase my age
      </Button>
      {myAge}

      <p>Visibility</p>
      <Button variant="primary" size="sm" onClick={handleToggle}>
        {visible ? "Hide" : "Show"}
      </Button>
      {visible ? "i am visible" : "not visible"}

      <p>Hobbies</p>
      <input
        type="text"
        placeholder="hobbies"
        value={hobbyInput}
        onChange={handleMyHobby}
      />
      <Button variant="primary" size="sm" onClick={addHobby}>
        add hobby
      </Button>
      {hobbies.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}

      <p>User example</p>
      <input
        type="text"
        placeholder="name"
        value={user.name}
        onChange={handleUserName}
      />
      <input
        type="text"
        placeholder="age"
        value={user.age}
        onChange={handleUserAge}
      />
      {user.name}
      {user.age}
    </>
  );
};

export default States;
