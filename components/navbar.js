import "../app/layout";

export default function NavBar() {
  return (
    <>
      <span className="flex flex-row justify-between">
        <span className="flex flex-row">
          <span className="p-3">
            <a href="/">Home</a>
          </span>
          <span className="p-3">
            <a href="/about">About</a>
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
