// string
// number
// boolean
// array of string
// array of number
// array of string and number
// array mixed
// array of objects
// object
// Union
// Tuple
// extends - interface
// & - type
// type
// interface
// optional

const Basics = () => {
  // string
  let myname: string = "Kishori Tutorials";

  // number
  let myAge: number = 45;

  // boolean
  let isMarried: boolean = false;

  // array of string
  let hobbies: string[] = ["cricket", "badminton", "tennis"];

  // array of number
  let myMarks: number[] = [45, 57, 66];

  // array of string and number
  let myStringAndNo: (string | number)[] = [45, 57, 66, "abc"];

  //  type Product = { id: number; name: string; price: number }[];
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  // array of objects
  let products: Product[] = [
    { id: 1, name: "shampoo", price: 45 },
    { id: 2, name: "oil", price: 55 },
  ];

  type Friend = {
    friendName: string;
    friendAge: number;
  };

  //   type Person = Friend & {
  //     name: string;
  //     surname: string;
  //     age: number;
  //     hobbies: string[];
  //     places: ("bandra" | "andheri")[]; // union
  //     countries: Cities;
  //     // friend: Friend;
  //   };

  interface Person {
    name: string;
    surname: string;
    age: number;
    hobbies: string[];
    places: ("bandra" | "andheri")[]; // union
    countries: Cities;
    friend: Friend;
  }
  type Cities = ["india", "usa", "china"];

  let person: Person = {
    name: "Kishori",
    surname: "Tutorials",
    age: 45,
    hobbies: ["cricket", "badminton", "tennis"],
    places: ["andheri", "bandra"],
    countries: ["india", "usa", "china"],
    friend: {
      friendName: "Ramesh",
      friendAge: 45,
    },
  };

  return (
    <>
      <p>{myname}</p>
      <p>{myAge}</p>
      <p>{isMarried ? "Married" : "Unmarried"}</p>
      {hobbies.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
      {myMarks.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
      {myStringAndNo.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
      {products.map((item) => {
        return (
          <>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </>
        );
      })}
      {person.name}
      {person.surname}
      {person.age}
    </>
  );
};

export default Basics;
