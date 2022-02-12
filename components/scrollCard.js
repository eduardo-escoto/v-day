import Image from "next/image";
import Button from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";

// TODO:
// Add the content and photos. Going to stick with this layout.

export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="border-x-2 border-y border-pink-100 max-w-md px-10 py-6 text-xl flex flex-col text-center justify-center"
      id={props.id}
    >
      <div className="min-h-full">
        {props.prevButton ? (
          <div>
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
        <div className="mb-4">
          <h1 className="text-3xl">{props.title}</h1>
        </div>
        {props.imagePaths
          ? props.imagePaths.map((path, idx) => (
              <div
                key={idx}
                className="max-w-sm border border-solid border-white rounded-md my-4"
              >
                <Image
                  className="rounded-md"
                  src={path}
                  width={3}
                  height={4}
                  layout="responsive"
                  quality={100}
                  alt="pic"
                />
              </div>
            ))
          : null}
        <div className="text-left text-sm">
          <p>{props.text}</p>
        </div>

        {props.nextButton ? (
          <div className="mb-2">
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
