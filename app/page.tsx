import Link from "next/link";
import MenuBar from "./component/MenuBar";

export default function Home() {
  return (
    <>
      <MenuBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl">Welcome to Ron Yip&#39;s first Webpage</h1>
        <Link
          className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500"
          href="#"
        >
          About Me
        </Link>
      </main>
    </>
  );
}
