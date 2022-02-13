import Head from "next/head";
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
We finally had the chance to go to a comedy show! 
And what better act to see than one of our faves, Ali Wong! 
She had so many raunchy ass jokes, but that made it real fun. We also got to eat some good 
ice cream while we hid from the rain! 
  `,
    date: new Date(2021, 7, 24),
    media: [
      { path: "/ali_wong/IMG_5819.MOV.mp4", type: "video" },
      { path: "/ice_cream/IMG_7662.MOV.mp4", type: "video" },
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute.gif" },
      { path: "/gifs/milk-and-mocha (6).gif" },
      { path: "/gifs/milk-mocha (2).gif" },
      { path: "/gifs/milk-and-mocha-cute (6).gif" },
    ],
  },
  {
    title: "Battleship!",
    text: `Board games at your place.
     I completely destroyed you at Stratego after I got both of our most powerful pieces out. 
     You were fucking pissed LMFAOOO. `,
    date: new Date(2021, 7, 8),
    media: [
      { path: "/battleship/IMG_0191.JPEG" },
      { path: "/battleship/IMG_0192.JPEG" },
      { path: "/battleship/IMG_0190.JPEG", ...dimsFromAspectRatio(300, 3 / 4) },
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute (11).gif" },
      { path: "/gifs/cat-love.gif" },
      { path: "/gifs/love-mochi (1).gif" },
      { path: "/gifs/milk-and-mocha-cute (10).gif" },
    ],
  },
  {
    title: "Your Birthday Dinner.",
    text: `
    This night we finally got to do some Michelin Star fine dining in that quirky restaurant in the 
    alley way. It was actually immensely rich and flavorful. I feel like that experience really 
    elevated the potential of food for me. I am thankful you joined me for dinner there!
    `,
    date: new Date(2021, 8, 3),
    media: [
      { path: "/bday_dinner/IMG_5938.MOV.mp4", type: "video" },
      { path: "/bday_dinner/IMG_4031.JPEG" },
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute (15).gif" },
      { path: "/gifs/peach-goma.gif" },
      { path: "/gifs/milk-and-mocha-cute (4).gif" },
      { path: "/gifs/milk-mocha-bear-kisses.gif" },
    ],
  },
  // {
  //   title: "Booster Shot appointment"
  // },
  {
    title: "Christmas with Friends!",
    text: `We got to have a final sleepover hangout with John and Tori before I moved out! Twas 
    a time full of joy and jolly. We all exchanged presents and we all got great stuff! 
    We also got the chance to take some fire pics with the Christmas tree downtown!
    `,
    date: new Date(2021, 11, 4),
    media: [
      { path: "/christmas_with_friends/IMG_7930.MOV.mp4", type: "video" },
      { path: "/christmas_with_friends/IMG_7982.MOV.mp4", type: "video" },
      { path: "/christmas_with_friends/IMG_7855.MOV.mp4", type: "video" },
      {
        path: "/christmas_with_friends/IMG_7848.MOV.mp4",
        type: "video",
        ...dimsFromAspectRatio(300, 3 / 4),
      },
    ],
    gifs: [
      { path: "/gifs/love-milk-and-mocha.gif" },
      { path: "/gifs/mochi-cat-chibi-cat.gif" },
      { path: "/gifs/milk-mocha (3).gif" },
      { path: "/gifs/milk-and-mocha (4).gif" },
    ],
  },
  {
    title: "Enchant Christmas!",
    text: `On this day, we hit up Enchant Christmas! 
    We got to Ice Skate together on a chaotic track. There were children barreling through with no
    regards, and adults struggling to keep their footing. It was hilarious watching the difference in 
    skill level. We even watched a kid knock a girl over just to proceed to skate away without saying sorry.
    Overall, a fun time! Lots of cute pics!! My only regret was eating that poutine thing.
    `,
    date: new Date(2021, 11, 10),
    media: [
      { path: "/christmas_wonderland/IMG_8075.MOV.mp4", type: "video" },
      { path: "/christmas_wonderland/IMG_8059.MOV.mp4", type: "video" },
      { path: "/christmas_wonderland/IMG_8021.MOV.mp4", type: "video" },
    ],
    gifs: [
      { path: "/gifs/milk-mocha (1).gif" },
      { path: "/gifs/grey-cat-white-cat.gif" },
      { path: "/gifs/cute-bears-love.gif" },
      { path: "/gifs/milk-and-mocha (2).gif" },
    ],
  },
  // {
  // title: "coco"
  // },
  {
    title: "Crabs on the River! (sweaty)",
    text: `So I already tend to run kind of warm. Now, add the sweltering, disgusting, swampy, 
    humid Maryland weather, and that makes a very sweaty, moist man.
    Even worse, being sweaty and sticky and moist while covered in crab shell and crab guts. 
    It really came together to craft quite the experience. It was alot of fun but MAN I felt gross hahahaahahah
    `,
    date: new Date(2021, 7, 17),
    media: [
      { path: "/crabshack/IMG_5761.MOV.mp4", type: "video" },
      { path: "/crabshack/IMG_5762.MOV.mp4", type: "video" },
      { path: "/crabshack/IMG_5766.MOV.mp4", type: "video" },
      {
        path: "/crabshack/IMG_5768.MOV.mp4",
        type: "video",
        ...dimsFromAspectRatio(300, 3 / 4),
      },
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute (9).gif" },
      { path: "/gifs/sending-love.gif" },
      { path: "/gifs/pat-hug.gif" },
      { path: "/gifs/mocha-sebusun.gif" },
    ],
  },
  {
    title: "Disneyland!!! (again)",
    text: `We go to Disneyland again! This time, the weather is better, we are more experienced, and we know exactly what we want to do!
    We also don't push ourselves to the point of immense pain like the first time we were here. 
    We also thought about getting you onto Space Mountain, however, after riding it again, I realized 
    that I was indeed incorrect. You would NOT have liked that ride LOL.
    That day 2 at California Adventure was rough. 
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
    title: "River Raftin' and Flying High!",
    text: `After a rough night at a lame Airbnb, we awaken sore and beaten only to take on another 
    park. We slap on some Salonpas and hobble around the California themed park. We also get to ride
    the River Rapids ride despite you feeling a little scared at first! I don't know how I convinced 
    you, but I'm glad I did!`,
    date: new Date(2021, 8, 20),
    media: [
      { path: "/disneyland_1/IMG_4251.JPEG" },
      { path: "/disneyland_1/IMG_6276.MOV.mp4", type: "video" },
    ],
    gifs: [
      { path: "/gifs/transparent-milk-and-mocha.gif" },
      { path: "/gifs/more-hugs.gif" },
      { path: "/gifs/masters.gif" },
      { path: "/gifs/milk-and-mocha-cute (9).gif" },
    ],
  },
  {
    title: "We take on Disneyland!",
    text: `
    After months of planning we finally made it to the promised land! 
    We did all of the cute shit and I had the time of my life. Despite the many stomach problems and bowel
    movements and menstruation, we made the most of it and had a great time! We got to ride pretty much everything.
    Some lowlights though; Pirates of the Carribean breaking down while we were halfway through the line, and
    the Airbnb looking sketchy.
    `,
    date: new Date(2021, 8, 19),
    media: [
      { path: "/disneyland_1/IMG_4227.MP4", type: "video" },
      { path: "/disneyland_1/IMG_4226.JPEG" },
      { path: "/disneyland_1/IMG_4234.JPEG" },
      { path: "/disneyland_1/IMG_4243.mp4", type: "video" },
      // {path: "/disneyland_1/IMG_6226.JPG"},
      { path: "/disneyland_1/IMG_6226.MOV.mp4", type: "video" },
      // {path: "/disneyland_1/IMG_6229.MOV.mp4", type:"video"}
    ],
    gifs: [
      { path: "/gifs/love-milk-and-mocha.gif" },
      { path: "/gifs/mochi-cat-chibi-cat.gif" },
      { path: "/gifs/milk-mocha (3).gif" },
      { path: "/gifs/milk-and-mocha (4).gif" },
    ],
  },
  // {
  //   title:"drunk_call"
  // }
  {
    title: "Not sure what we did on this day.",
    text: `What the title says.
     I think we just had a sleepover and chilled out :]. 
     We took some insanely cute pics which is why I have included it.
     If you have any memories of this specific day, lmk. All I remember is 
     you telling me that Sam thought I was weird looking from these LOL.`,
    date: new Date(2021, 1, 24),
    media: [
      { path: "/feb_24/feb_24_1.JPEG", ...dimsFromAspectRatio(300, 3 / 4) },
      { path: "/feb_24/feb_24_4.JPEG", ...dimsFromAspectRatio(300, 3 / 4) },
      { path: "/feb_24/feb_24_2.JPEG", ...dimsFromAspectRatio(300, 3 / 4) },
      { path: "/feb_24/feb_24_3.JPEG", ...dimsFromAspectRatio(300, 3 / 4) },
    ],
    gifs: [
      { path: "/gifs/sending-love.gif" },
      { path: "/gifs/pat-hug.gif" },
      { path: "/gifs/mocha-sebusun.gif" },
      { path: "/gifs/love-mochi.gif" },
    ],
  },
  {
    title: "First REAL Date",
    text: `Remember when you had all these assumptions of me and you thought I was
    going to be embarrassing to go out with? After like MONTHS of hooking up you finally dared to 
    go out on a real date with me HAHAHA. We got Kbbq and I talked too much and I stressed you out 
    since we had a time limit. Whats new huh.`,
    date: new Date(2021, 3, 23),
    media: [{ path: "first_date/IMG_2913.MOV.mp4", type: "video" }],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute (11).gif" },
      { path: "/gifs/cat-love.gif" },
      { path: "/gifs/love-mochi (1).gif" },
      { path: "/gifs/milk-and-mocha-cute (10).gif" },
    ],
  },
  {
    title: "Your INSANE Dave n' Busters Luck.",
    text: `We went to Dave n' Busters and you somehow have the luck of a gambling monster.
    You won literally like every jackpot without even trying. It was so funny hanging out with Branden 
    and Ktsai and seeing them freak out every time you won.
    `,
    date: new Date(2021, 8, 24),
    media: [
      {
        path: "/san_diego_trip/IMG_4335.mp4",
        type: "video",
        ...dimsFromAspectRatio(300, 16 / 9),
      },
      {
        path: "/san_diego_trip/IMG_4331.JPG",
        ...dimsFromAspectRatio(300, 16 / 9),
      },
    ],
    gifs: [
      { path: "/gifs/masters.gif" },
      { path: "/gifs/milk-and-mocha-cute (9).gif" },
      { path: "/gifs/sending-love.gif" },
      { path: "/gifs/pat-hug.gif" },
      { path: "/gifs/mocha-sebusun.gif" },
    ],
  },
  {
    title: "Balboa Park!",
    text: `
    We got pho!
`,
    date: new Date(2021, 8, 23),
    media: [
      { path: "/san_diego_trip/IMG_4262.JPEG" },
      { path: "/san_diego_trip/IMG_4340.JPEG" },
      { path: "/san_diego_trip/IMG_4353.JPEG" },
      { path: "/san_diego_trip/IMG_6358.JPG" },
      { path: "/san_diego_trip/IMG_6601.JPG" },
    ],
    gifs: [
      { path: "/gifs/milk-and-mocha-cute (6).gif" },
      { path: "/gifs/milk-bear.gif" },
      { path: "/gifs/milk-and-mocha-cute (5).gif" },
      { path: "/gifs/peach-cat.gif" },
    ],
  },
  {
    title: "We fly to San Diego!",
    text: `I don't have any other pics from this on the flight or anything. But I just 
    remember you dying when we took this video, I think saying that you really wanted to drink LOL.
    And then we got invited to a party at Ktsai's but we were hella tired, and also feeling shitty. 
    This was back when the Plane motion sickness didn't exist :D
    `,
    date: new Date(2021, 8, 16),
    media: [
      {
        path: "/san_diego_trip/65355284657__964CD2A3-A45B-4A0B-B2E8-53ADA01C84B5.MP4",
        type: "video",
      },
    ],
    gifs: [
      { path: "/gifs/more-hugs.gif" },
      { path: "/gifs/masters.gif" },
      { path: "/gifs/cat-love.gif" },
      { path: "/gifs/love-mochi (1).gif" },
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
    text: `On this day, the Owl prophecy was born. Shoutout to Amy Lee
   and all her sponsors. We met up and went to Marshalls bc we love Marshalls :D
   `,
    date: new Date(2021, 1, 14),
    media: [
      { path: "/v_day_2021/IMG_2959.JPEG" },
      {
        path: "/v_day_2021/63503844915__1516D3F3-6535-40A0-AB0E-C36FA04D94D2.JPEG",
      },
      {
        path: "/v_day_2021/63503390053__DB5D7DFF-6E46-40DE-A88E-EC015E332BA8.MOV.mp4",
        type: "video",
      },
      { path: "/v_day_2021/IMG_1475.JPEG", ...dimsFromAspectRatio(300, 3 / 4) },
    ],
  },
  {
    title: "So...",
    text: "Will u be my valentine? heh",
  },
];

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
