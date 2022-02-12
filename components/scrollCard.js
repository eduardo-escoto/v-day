import Image from "next/image";
import Button from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";


export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="border-x-2 border-pink-100 max-w-md px-10 py-6 text-xl flex flex-col text-center justify-center"
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
        <div className="max-w-sm border border-solid border-white rounded-md my-4">
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
