import { useState } from "react";

type Age = number;
type Name = string;
type Visibility = boolean;
type Hobbies = string[];
type HobbyInput = string;
type User = {
  name: string;
  age: number;
};
type Status = "idle" | "loading" | "success" | "error";

const States = () => {
  // Number
  const [age, setAge] = useState<Age>(25);

  // String
  const [name, setName] = useState<Name>("");

  // Boolean
  const [isVisible, setIsVisible] = useState<Visibility>(false);

  // Array
  const [hobbies, setHobbies] = useState<Hobbies>(["Reading"]);
  const [hobbyInput, setHobbyInput] = useState<HobbyInput>("");

  // Object
  const [user, setUser] = useState<User>({ name: "", age: 0 });

  // Union
  const [status, setStatus] = useState<Status>("idle");

  // Array add
  const addHobby = () => {
    if (hobbyInput.trim()) {
      setHobbies((prev) => [...prev, hobbyInput]);
      setHobbyInput("");
    }
  };

  // Array remove
  const removeHobby = (index: number) => {
    setHobbies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>useState Types</h2>

      {/* Number */}
      <h3>1. Number</h3>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increase</button>

      {/* String */}
      <h3>2. String</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <p>Hello, {name || "stranger"}</p>

      {/* Boolean */}
      <h3>3. Boolean</h3>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>Now you see me!</p>}

      {/* Array */}
      <h3>4. Array</h3>
      <input
        value={hobbyInput}
        onChange={(e) => setHobbyInput(e.target.value)}
        placeholder="New hobby"
      />
      <button onClick={addHobby}>Add</button>
      <ul>
        {hobbies.map((hobby, i) => (
          <li key={i}>
            {hobby} <button onClick={() => removeHobby(i)}>X</button>
          </li>
        ))}
      </ul>

      {/* Object */}
      <h3>5. Object</h3>
      <input
        value={user.name}
        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
        placeholder="Name"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, age: Number(e.target.value) }))
        }
        placeholder="Age"
      />
      <p>{user.name}</p>
      <p>{user.age}</p>

      {/* Union */}
      <h3>6. Union Type</h3>
      <button onClick={() => setStatus("loading")}>Loading</button>
      <button onClick={() => setStatus("success")}>Success</button>
      <button onClick={() => setStatus("error")}>Error</button>
      <p>Status: {status}</p>
    </>
  );
};

export default States;
