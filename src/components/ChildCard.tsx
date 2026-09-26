import type { User } from "../types";
import type { Dispatch, SetStateAction } from "react";

type CardProps = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const ChildCard = ({ user, setUser }: CardProps) => {
  const handleLogin = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = (await res.json()) as User;
      setUser(data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default ChildCard;
