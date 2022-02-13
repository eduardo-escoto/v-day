import ScrollCard from "../components/scrollCard";
import { useRef, createRef, useEffect } from "react";
function dimsFromAspectRatio(width = 300, ar = 4 / 3) {
  return { height: ar * width, width };
}

const cardData = [
  {
    title: "To Calista",
    text: `Hi Calista!
    This is Ed speaking. I hope you're doing well and having a great day. 
    I can't believe its already Valentine's Day! Time really flies. 
    We've had so many great memories through out all this time we've known each other, 
    so I thought it'd be cute to walk down memory lane.`,
    date: new Date(2022, 1, 13),
    gifs: [
      { path: "/gifs/milk-and-mocha-cute (7).gif" },
      { path: "/gifs/milk-and-mocha-cute (13).gif" },
      { path: "/gifs/milk-and-mocha (3).gif" },
      { path: "/gifs/love-cat.gif" },
    ],
  },
  {
    title: "I tell you I like you.",
    text: `
  I... I was not smooth at all with this. 
  I really thought you just didn't like me for like the next 10 minutes while we tried to figure it all out. 
  10 minutes of dejection and being like "AHHHHHHHH FUUUUUKKKKK".
  Look at us now though, so maybe that was smooth of me ;) 
  `,
    date: new Date(2020, 11, 14),
    media: [
      { path: "/admission/admit.jpg", ...dimsFromAspectRatio(300, 19.5 / 9) },
    ],
    gifs: [
      { path: "/gifs/cat-love.gif" },
      { path: "/gifs/cat-peach.gif" },
      { path: "/gifs/iklog.gif" },
      { path: "/gifs/dap.gif" },
    ],
  },
  {
    title: "The Milk and Money Tour.",
    text: `
We finally had the chance to go to a comedy show! And what better act to see than one of our faves, Ali Wong!
  `,
    date: new Date(2021, 7, 24),
    media: [
      { path: "/ali_wong/IMG_5819.MOV.mp4", type:"video"},
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute.gif" },
      { path: "/gifs/milk-and-mocha (6).gif" },
      { path: "/gifs/milk-mocha (2).gif" },
      { path: "/gifs/milk-and-mocha-cute (6).gif" },
    ],
  },
  {
    title: "Disneyland!!! (again)",
    text: `We go to Disneyland again! This time, the weather is better, we are more experienced, and we know exactly what we want to do!
    We also don't push ourselves to the point of immense pain like the first time we were here. That day 2 at California Adventure was rough. 
    This visit wasn't all great though because we tried to go to Coco Ichibanya after and we had the worst time LMAOOOO. You saw me get really angry fr fr for like the first time.
    Very, very vulnerable.`,
    date: new Date(2022, 0, 2),
    media: [
      { path: "/disney_v2/IMG_0711.JPEG" },
      { path: "/disney_v2/IMG_0714.JPEG" },
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha (1).gif", width: 60 },
      { path: "/gifs/milk-and-mocha (5).gif", width: 60 },
      // { path: "/gifs/milk-mocha.gif"},
      // { path: "/gifs/milk-and-mocha-cute (14).gif" },
      { path: "/gifs/cat-love.gif" },
      { path: "/gifs/cat-peach.gif" },
    ],
  },
  {
    title: "Our First Hangout!",
    text: `
    I still remember how nervous and excited I was to meet you. What a fun day it was! 
    Remember how far away from you I was the whole night? I remember thinking about how cute you were
    and how much fun it was talking while we painted. It was so funny how much of a trouble we went through to take 
    a polaroid pic.
    `,
    date: new Date(2020, 11, 4),
    media: [
      { path: "/first_hangout/polaroid.jpeg" },
      { path: "/first_hangout/shelf_photo.jpeg" },
    ],
    gifs: [
      { path: "/gifs/cat-love.gif" },
      { path: "/gifs/cat-peach.gif" },
      { path: "/gifs/iklog.gif" },
      { path: "/gifs/dap.gif" },
    ],
  },
  
  {
    title: "Our First Valentine's Day",
    text: "The first time we hung out as ",
    // media: [{ path: "/v_day_2021/marshalls.jpeg" }],
    // media: [{ path: "/test.mov", type:'video' }, {path: "/first_hangout/shelf_photo.jpeg" }],
    date: new Date(2021, 1, 14),
  },
];

export default function Home() {
  const refs = useRef(cardData.map(() => createRef()));
  useEffect(() => {
    refs.current[refs.current.length - 1].current.focus();
  }, []);

  return (
    <>
      <div className="flex">
        <div className="basis-full center">
          {cardData
            .sort((a, b) => b.date - a.date)
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
