import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="flex min-h-screen flex-col">
        <span className="">
          <h1 className="text-3xl pt-5 pl-2">
            <strong>This is the homepage</strong>
          </h1>
        </span>
        <span className="pt-3 pl-2">
          <p className="">
            To edit this page. Please visit <strong>app/page.js</strong>
          </p>
          <p>
            To visit the about page <a href="/about">click here.</a>
          </p>
        </span>
      </main>
    </>
  );
}
