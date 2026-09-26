import { useState } from "react";
import ChildCard from "./ChildCard";
import type { User } from "../types";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <h2>Please login</h2>
      )}

      <ChildCard user={user} setUser={setUser} />
    </div>
  );
};

export default App;
