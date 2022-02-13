import { useEffect, useRef } from "react";
import Image from "next/image";
export default function GifOnCard(props) {
  const divRef = useRef();
//   console.log(divRef)
  useEffect( () => divRef.current.focus())
  return (
    <div className="relative"
      ref={divRef}
      quality={100}
      style={{
        width: props.width || "50px",
        height: props.height || "50px"
      }}
    >
      <Image src={props.path} layout="fill" alt="gif" priority={true} />
    </div>
  );
}
