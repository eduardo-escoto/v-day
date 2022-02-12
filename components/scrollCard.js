import Image from "next/image";
import Button from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";

// overflow y - with scrolling in card, next and bottom fixed.

export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="relative border-x-2 border-pink-100 max-w-md px-10 py-6 text-xl flex flex-col text-center justify-center max-h-screen overflow-y-auto"
      id={props.id}
    >
      <div className="min-h-full">
        <div>
          {props.prevButton ? (
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
          ) : null}
        </div>
        <div className="max-w-sm border border-solid border-white rounded-md">
          <Image
            className="rounded-md"
            src="/test.jpeg"
            width={3}
            height={4}
            layout="responsive"
            quality={100}
            alt="pic"
          />
        </div>
        <div className="max-w-sm border border-solid border-white rounded-md">
          <Image
            className="rounded-md"
            src="/test.jpeg"
            width={3}
            height={4}
            layout="responsive"
            quality={100}
            alt="pic"
          />
        </div>
        <p>{props.text}</p>

        <div className="mb-2">
          {props.nextButton ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
});
