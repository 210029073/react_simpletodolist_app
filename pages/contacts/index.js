import NavBar from "@/components/navbar.js";
import "../../app/layout.js";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

var Person = function (firstName, lastName, email, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phoneNumber = phoneNumber;
};

var contacts = [];

function Data() {
  contacts = [];
  contacts.push(
    new Person("Ibrahim", "Ahmad", "210029073@aston.ac.uk", "+44 7845 087565")
  );
  contacts.push(
    new Person("Lionel", "Muskwe", "leo16@gmail.com", "+44 7564 758592")
  );
  console.log(contacts);
  useEffect(() => {
    localStorage.removeItem("contacts");
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const list_contacts = contacts.map((element) => (
    <span
      key={element.email}
      className="flex flex-col bg-white text-black p-2 rounded-md"
    >
      <ul>
        <li
          key={element.firstName + " " + element.lastName}
          className="text-xl font-semibold"
        >
          {element.firstName} {element.lastName}
        </li>
        <li key={element.email} className="text-lg">
          {element.email}
        </li>
        <li key={element.phoneNumber} className="text-lg">
          {element.phoneNumber}
        </li>
      </ul>
    </span>
  ));
  return (
    <span className="flex flex-row flex-wrap justify-evenly">
      {list_contacts}
    </span>
  );
}

export default function Contacts() {
  return (
    <>
      <title>Contacts</title>
      <NavBar></NavBar>
      <section className="flex flex-col pl-2 min-h-screen">
        <span className="pt-5">
          <h1 className="text-3xl">
            <strong>This is the Contacts Page.</strong>
          </h1>
        </span>
        <span className="flex flex-col justify-around flex-wrap">
          <span className="p-1">
            <h2>Content goes here...</h2>
          </span>

          <span className="p-2">
            <Data />
          </span>

          <span className="p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nibh lectus, euismod non consectetur sit amet, placerat sodales
              leo. Curabitur quam purus, consequat sit amet lectus vel, iaculis
              feugiat odio. Aliquam consectetur pharetra tortor ut blandit. Duis
              interdum ex lobortis tellus aliquam, ornare cursus felis molestie.
              Nunc sed eros a enim ultrices gravida. Proin at varius magna.
              Aenean a metus lacus. Donec malesuada urna vel imperdiet
              tincidunt. Vestibulum finibus vel nibh in molestie. Aliquam
              vehicula magna lorem, nec accumsan turpis pulvinar in. Suspendisse
              potenti. Pellentesque tincidunt, nulla sit amet dignissim
              eleifend, ligula arcu dignissim nibh, sed suscipit metus odio nec
              nibh. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Pellentesque accumsan ultricies erat. Nulla tempus
              pulvinar augue, ac interdum leo scelerisque vitae. Donec sed
              feugiat massa.
            </p>
          </span>

          <span className="p-2">
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Mauris scelerisque vel nulla nec feugiat. Aliquam efficitur mollis
              condimentum. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Duis at dolor mattis,
              laoreet massa et, molestie leo. Praesent mattis odio et molestie
              auctor. Nam nunc ante, eleifend rutrum pulvinar ut, eleifend eu
              sem. Quisque non interdum metus. Cras efficitur tempus risus et
              sagittis. Curabitur placerat aliquam diam.
            </p>
          </span>

          <span className="p-2">
            <p>
              Phasellus consequat consequat convallis. Sed lorem ligula,
              sollicitudin a condimentum ac, aliquet eu nisi. Morbi et nunc
              lacinia, vulputate nulla nec, fringilla orci. Vestibulum interdum
              magna vel feugiat convallis. Nullam non justo vitae mi suscipit
              varius. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Fusce mattis est ut auctor eleifend.
            </p>
          </span>

          <span className="p-2">
            <p>
              Nullam tempor libero elit, vitae efficitur odio tincidunt sed.
              Nulla commodo odio eget nisi ornare, a lacinia magna vehicula.
              Curabitur sit amet libero dictum, fermentum augue eget, suscipit
              enim. Aenean viverra, urna vitae varius finibus, lacus leo
              consequat quam, eget porta orci dui ac ante. Pellentesque feugiat
              tellus ut magna facilisis varius. Nullam sit amet varius turpis.
              Sed consectetur ligula nec nisi luctus blandit. Aenean condimentum
              est vitae suscipit lobortis. In lacinia ligula vel ultrices
              ultrices. Ut ut metus nec mi lobortis eleifend. In vitae congue
              arcu. Curabitur et elementum massa, id gravida arcu. Etiam feugiat
              ipsum risus, a molestie augue facilisis vel.
            </p>
          </span>

          <span className="p-2">
            <p>
              Donec blandit, eros ac sagittis blandit, lacus ipsum maximus
              dolor, malesuada blandit leo urna non nulla. Nam nec turpis a
              lectus porttitor mattis at vel ante. Pellentesque commodo sed diam
              eget sollicitudin. Nullam tempor metus dui, eget condimentum nisl
              tincidunt in. Suspendisse porta, libero quis semper tempor, nisi
              neque lobortis eros, eget mattis mi nunc sed nunc. Aenean
              consectetur fringilla nisl. Nunc dictum sagittis lectus. In hac
              habitasse platea dictumst. Aenean tempor faucibus mi, vitae
              interdum quam bibendum vel. Suspendisse vestibulum lobortis
              mauris, sed ornare sapien commodo in. Aliquam sed varius tellus.
              Duis sed ipsum vitae nisl vulputate pellentesque vitae id augue.
            </p>
          </span>
        </span>
      </section>
    </>
  );
}
