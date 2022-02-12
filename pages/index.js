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
