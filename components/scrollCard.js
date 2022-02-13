import Image from "next/image";
import Button from "./button";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";

// TODO:
// Add the content and photos. Going to stick with this layout.
// maybe go back to snap scroll and add x overflow for pics? def for now, add content and cute gifs n shit

export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="border-x-2 border-y border-pink-100 max-w-md px-3 py-6 text-xl flex flex-col text-center justify-center"
      id={props.id}
    >
      <div className="p-4 min-h-full bg-pink-100 border border-solid border-pink-300 rounded-lg shadow-xl">
        {props.prevButton ? (
          <div className="">
            <Button
              onClick={() =>
                props.prevRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FontAwesomeIcon
                icon={faLongArrowUp}
                className="text-slate-600"
              />
            </Button>
          </div>
        ) : null}
        <div className="mb-3">
          <h1 className="text-4xl">{props.title}</h1>
          {props.date ? (
            <h4>
              &mdash;{" "}
              {props.date.toLocaleString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              &mdash;
            </h4>
          ) : null}
        </div>
        {props.media ? (
          props.media.length > 1 ? (
            <div className="w-11/12 flex gap-4 snap-x snap-mandatory overflow-x-auto ml-auto mr-auto">
              {props.media.map((media, idx) => {
                return media.type === "video" ? (
                  <div
                    key={idx}
                    className="snap-center shrink-0 first:pl-4 last:pr-4"
                  >
                    <ReactPlayer
                      loop={true}
                      // light={true}
                      controls={true}
                      playsinline={true}
                      url={media.path}
                      height={media.height || 400}
                      width={media.width || 300}
                      className="shrink-0 w-fit rounded-lg"
                      style={{
                        margin: "0 auto",
                        borderTopLeftRadius: "0.25rem",
                        borderBottomLeftRadius: "0.25rem",
                        overflow: "hidden",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    key={idx}
                    className="snap-center shrink-0 first:pl-4 last:pr-4"
                  >
                    <Image
                      className="shrink-0 w-fit rounded-lg"
                      src={media.path}
                      height={media.height || 400}
                      width={media.width || 300}
                      alt="Picture"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div key={0} className="w-full ml-auto mr-auto">
              {props.media[0].type === "video" ? (
                <ReactPlayer
                  loop={true}
                  // light={true}
                  controls={true}
                  playsinline={true}
                  url={props.media[0].path}
                  height={props.media[0].height || 400}
                  width={props.media[0].width || 300}
                  className="shrink-0 w-fit rounded-lg"
                  style={{
                    margin: "0 auto",
                    borderTopLeftRadius: "0.25rem",
                    borderBottomLeftRadius: "0.25rem",
                    overflow: "hidden",
                  }}
                />
              ) : (
                <Image
                  className="shrink-0 w-fit rounded-lg"
                  src={props.media[0].path}
                  height={props.media[0].height || 400}
                  width={props.media[0].width || 300}
                  alt="Picture"
                />
              )}
            </div>
          )
        ) : null}
        <div className="text-left mt-4 mb-2 mx-2 px-4">
          <p className="text-base">{props.text}</p>
        </div>

        {props.nextButton ? (
          <div className="">
            <Button
              onClick={() =>
                props.nextRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <FontAwesomeIcon
                icon={faLongArrowDown}
                className="text-slate-600"
              />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
});
