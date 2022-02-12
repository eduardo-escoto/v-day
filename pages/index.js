import ScrollCard from "../components/scrollCard";
import {useMemo, useRef, createRef, useEffect, useState } from "react";
import randomColor from "randomcolor";

export default function Home() {
  const [colors, setColors] = useState([])

  const ind = useMemo(() => [0, 1, 2, 3], []);
  useEffect(() => setColors(ind.map(() => randomColor({luminosity: 'light', hue:'red'}))), [ind])
  
  const refs = useRef(ind.map(() => createRef()));
  useEffect(() => {
    refs.current[refs.current.length - 1].current.focus();
  }, [ind]);

  return (
    <div className="flex">
      <div
        className="basis-full max-h-screen overflow-y-scroll center"
      >
        {ind.map((v, i) => (
          <ScrollCard
            cardStyle={{backgroundColor: colors[i], margin: "0 auto"}}
            ref={refs.current[i]}
            nextRef={i < ind.length - 1 ? refs.current[i + 1] : null}
            prevRef={i > 0 ? refs.current[i - 1] : null}
            nextButton={i < ind.length - 1}
            prevButton={i > 0}
            key={i}
            id={i}
            text={i}
          />
        ))}
      </div>
    </div>
  );
}
