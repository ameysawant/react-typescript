import type { User } from "../types";
import type { Dispatch, SetStateAction } from "react";

type CardProps = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const ChildCard = ({ user, setUser }: CardProps) => {
  const data = {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
  } as User;

  const handleLogin = () => {
    setUser(data);
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
