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
      style={{...props.cardStyle, minHeight: props.nextButton ? null: "100vh"}}
      ref={ref}
      className="border-x-2 border-pink-100 max-w-md p-12 text-xl flex flex-col text-center justify-center"

      id={props.id}
    >
      <div>
        {props.prevButton ? (
          <Button
            onClick={() =>
              props.prevRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faLongArrowUp} className="text-slate-600" />
          </Button>
        ) : null}
      </div>
      <div className="max-w-sm border border-solid border-white rounded-md">
        <Image
          className="rounded-md"
          src="/test.jpeg"
          width={6}
          height={9}
          layout="responsive"
          quality={100}
          alt="pic"
        />
      </div>
        <p>{props.text}</p>

      <div>
        {props.nextButton ? (
          <Button
            onClick={() =>
              props.nextRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faLongArrowDown} className="text-slate-600"/>
          </Button>
        ) : null}
      </div>
    </div>
  );
});
