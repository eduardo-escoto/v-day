import Head from "next/head";
import Image from "next/image";
import ScrollCard from "./scrollCard";

export default function Home() {
  return (
    <div className="mx-5 flex">
      <div className="basis-full max-h-screen overflow-y-scroll border border-solid border-gray-400 snap-mandatory snap-y">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <ScrollCard key={item} text = {item}/>
        ))}
      </div>
    </div>
  );
}
