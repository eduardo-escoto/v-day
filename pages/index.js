import ScrollCard from "../components/scrollCard";
import { useRef, createRef, useEffect } from "react";

const cardData = [
  {
    title: "To Calista",
    text: `Hi Calista!
    This is Ed speaking. I hope you're doing well and having a great day. 
    I can't believe its already Valentine's Day! Time really flies. 
    We've had so many great memories through out all this time we've known each other, 
    so I thought it'd be cute to walk down memory lane.`,
    date: "2021",
  },
  {
    title: "Our First Hangout!",
    text: `
    I still remember how nervous and excited I was to meet you. What a fun day it was! 
    Remember how far away from you I was the whole night? I remember thinking about how cute you were
    and how much fun it was talking while we painted. It was so funny how much of a trouble we went through to take 
    a polaroid pic.
    `,
    imagePaths: ["/test.jpeg", "/test.jpeg"],
    date: "2020-12-06",
  },
  {
    title: "Kirby Griffin",
    imagePaths: ["/test.jpeg"],
    text: `We got stupid shirts -____-`,
  },
];

export default function Home() {
  const refs = useRef(cardData.map(() => createRef()));
  useEffect(() => {
    refs.current[refs.current.length - 1].current.focus();
  }, []);

  return (
    <div className="flex">
      <div className="basis-full max-h-screen overflow-y-scroll center">
        {cardData.map((data, idx) => (
          <ScrollCard
            {...data}
            cardStyle={{ margin: "0 auto" }}
            ref={refs.current[idx]}
            nextRef={idx < cardData.length - 1 ? refs.current[idx + 1] : null}
            prevRef={idx > 0 ? refs.current[idx - 1] : null}
            nextButton={idx < cardData.length - 1}
            prevButton={idx > 0}
            key={idx}
            id={idx}
          />
        ))}
      </div>
    </div>
  );
}
