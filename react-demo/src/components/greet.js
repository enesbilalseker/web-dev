/*function Greet() {
  return <h1>Hello</h1>;
}

const Greet = () => {
  return <h1>Hello World</h1>;
};
export default Greet;

export const Greet = () => {
  return <h1>Hello World</h1>;
};*/

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
