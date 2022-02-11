import Image from "next/image";
export default function ScrollCard(props) {
  return (
    <div className="border-b border-solid border-white p-12 text-3xl flex flex-col text-center justify-center snap-start min-h-full">
      <p>{props.text}</p>
    </div>
  );
}
