import Link from "next/link";
import "../app/layout";

export default function NavBar() {
  return (
    <>
      <span className="flex flex-row justify-between">
        <span className="flex flex-row">
          <span className="p-3">
            <Link href="/">Home</Link>
          </span>
          <span className="p-3">
            <Link href="/about">About</Link>
          </span>
          <span className="p-3">
            <Link href="/contacts">Contacts</Link>
          </span>
        </span>
        <span className="w-max"></span>
      </span>
      {/* A placeholder */}
      {/* <span>
        <h1>
          <strong>This is a navbar component</strong>
        </h1>
      </span> */}
    </>
  );
}

// let Person = function (first, last, blood) {
//   let firstName = first;
//   let lastName = last;
//   const bloodGroup = blood;

//   function getFirstName() {
//     return firstName;
//   }

//   function getLastName() {
//     return lastName;
//   }
// };

// let p = new Person("Abbey", "Schwartz", "O");
// console.log(p.getFirstName());
