export const UserGreeting = () => {
  const isLoggedIn = true;
  return <div>Welcome {isLoggedIn ? "Enes" : "Guest"}</div>;
};
