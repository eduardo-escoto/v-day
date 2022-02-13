import Head from "next/head";
import ScrollCard from "../components/scrollCard";
import cardData from "../data/cardData";
import { useRef, createRef, useEffect } from "react";


export default function Home() {
  const refs = useRef(cardData.map(() => createRef()));
  useEffect(() => {
    refs.current[refs.current.length - 1].current.focus();
  }, []);

  return (
    <>
      <Head>
        <title>to calista, from ed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="basis-full center">
          {cardData
            .sort((a, b) => a.date - b.date)
            .map((data, idx) => (
              <ScrollCard
                {...data}
                cardStyle={{ margin: "0 auto" }}
                ref={refs.current[idx]}
                nextRef={
                  idx < cardData.length - 1 ? refs.current[idx + 1] : null
                }
                prevRef={idx > 0 ? refs.current[idx - 1] : null}
                nextButton={idx < cardData.length - 1}
                prevButton={idx > 0}
                key={idx}
                id={idx}
              />
            ))}
        </div>
      </div>
      <div className="max-w-md mx-auto text-center py-5">
        <p>Made with Love by Eduardo Escoto.</p>
      </div>
    </>
  );
}
