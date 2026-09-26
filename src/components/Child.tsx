import type { ChildProps, User } from "./types";

const Child = ({ user, setUser }: ChildProps) => {
  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );
      const data = (await response.json()) as User; //type assertion
      setUser(data);
    } catch (error) {}
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <h2>child component</h2>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </>
  );
};

export default Child;
