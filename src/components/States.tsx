import { useState } from "react";
import type { ChangeEvent } from "react";
import Button from "./Button";

type MyName = string;
type InputEvent = ChangeEvent<HTMLInputElement>;
type MyAge = number;
type Visibilty = boolean;
type Hobbies = string[];
type HobbyInput = string;
type User = {
  name: string;
  age: number;
};

const States = () => {
  const [myName, setMyName] = useState<MyName>("");
  const [myAge, setMyAge] = useState<MyAge>(45);
  const [visible, setVisible] = useState<Visibilty>(false);
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

  const handleHobby = (e: InputEvent) => {
    setHobbyInput(e.target.value);
  };

  const addHobby = () => {
    setHobbies((prev) => [...prev, hobbyInput]);
    setHobbyInput("");
  };

  const handleUserName = (e: InputEvent) => {
    setUser((prev) => ({ ...prev, name: String(e.target.value) }));
  };
  const handleUserAge = (e: InputEvent) => {
    setUser((prev) => ({ ...prev, age: Number(e.target.value) }));
  };

  return (
    <>
      <h2>states</h2>

      <p>string example</p>
      <input
        type="text"
        placeholder="myname"
        value={myName}
        onChange={handleMyName}
      />
      {myName}

      <p>age example</p>
      <Button variant="primary" size="sm" onClick={handleMyAge}>
        increase my age
      </Button>
      {myAge}

      <p>visible example</p>
      <Button variant="primary" size="sm" onClick={handleToggle}>
        {visible ? "Hide" : "Show"}
      </Button>
      {visible ? "visible" : "not visible"}

      <p>hobbies example</p>
      <input
        type="text"
        placeholder="hobby"
        value={hobbyInput}
        onChange={handleHobby}
      />
      <Button variant="primary" size="sm" onClick={addHobby}>
        add hobby
      </Button>
      {hobbies.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}

      <p>object example</p>
      <input
        type="text"
        placeholder="username"
        value={user.name}
        onChange={handleUserName}
      />
      <input
        type="text"
        placeholder="userage"
        value={user.age}
        onChange={handleUserAge}
      />
      {user.name}
      {user.age}
    </>
  );
};

export default States;
