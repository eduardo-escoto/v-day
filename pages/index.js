import ScrollCard from "../components/scrollCard";
import Image from "next/image";
import Button from "../components/button";
import React, { useRef, createRef, useEffect, forwardRef } from "react";
export default function Home() {
  // const div_ref = useRef();
  const ind = [0, 1, 2, 3];
  // const ind_len = ind.length
  const refs = useRef(ind.map(() => React.createRef()));
  const onClickH = () => console.log(refs);
  useEffect(() => {
    refs.current[refs.current.length - 1].current.focus();
  }, [ind]);

  return (
    <div className="flex">
      <div
        className="basis-full max-h-screen overflow-y-scroll border border-solid border-gray-400 snap-proximity snap-y"
        // style={{backgroundColor: {randomColor({ luminosity: "light" })}}}
      >
        {ind.map((v, i) => {
          console.log(i);
          return (
            <ScrollCardTest
              o={onClickH}
              ref={refs.current[i]}
              nextRef={i < ind.length - 1 ? refs.current[i + 1] : null}
              prevRef={i > 0 ? refs.current[i - 1] : null}
              nextButton={i < ind.length - 1}
              prevButton={i > 0}
              key={i}
              id={i}
              text={i}
            />
          );
        })}
      </div>
    </div>
  );
}
// export default function Home (){

//   console.log(refs)

//   return (<ul>
//     {['left', 'right'].map((el, i) =>
//       {
//         console.log(refs.current)
//       return <li key={i}><input ref={refs.current[i]} defaultValue={el} /></li>
//     })}
//     <button onClick={() => {console.log(refs.current)}}>ef</button>
//   </ul>)
// }
const ScrollCardTest = React.forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      ref={ref}
      // style={{ backgroundColor: bg_color }}
      className="p-12 text-3xl flex flex-col text-center justify-center snap-start min-h-full"
      id={props.id}
    >
      <Image src="/test.jpeg" width={400} height={600} priority={true} />
      <p>{props.text}</p>
      <div>
        {props.prevButton ? (
          <Button
            onClick={() =>
              props.prevRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Previous
          </Button>
        ) : null}
        {props.nextButton ? (
          <Button
            onClick={() =>
              props.nextRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Next
          </Button>
        ) : null}
      </div>
    </div>
  );
});
