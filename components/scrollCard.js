import Image from "next/image";
import randomColor from "randomcolor";
import Button from "./button";
import { useRef } from "react";
export default function ScrollCard(props) {
  const bg_color = randomColor({ hue: "green", luminosity: "light" });
  const ref = useRef();
  const onClickHandler = () => {
    console.log('test')
    ref.current.dispatchEvent(
      new KeyboardEvent("keypress", {
        key: "PageUp",
      })
    );
  };
  return (
    <div
      ref={ref}
      // style={{ backgroundColor: bg_color }}
      className="p-12 text-3xl flex flex-col text-center justify-center snap-start min-h-full"
      id={props.id}
    >
      <Image src="/test.jpeg" width={400} height={600} />
      <p>{props.text}</p>
      <div>
        {props.first ? null : (
          <Button onClick={onClickHandler}>Previous</Button>
        )}
        {props.last ? null : <Button>Next</Button>}
      </div>
    </div>
  );
}
