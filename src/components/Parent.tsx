import { useState } from "react";
import type { User } from "./types";
import Child from "./Child";

const Parent = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name} </h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <h2>Please login</h2>
      )}

      <Child user={user} setUser={setUser} />
    </div>
  );
};

export default Parent;
