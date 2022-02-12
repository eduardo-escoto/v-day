import Image from "next/image";
import Button from "./button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faLongArrowUp,
  faLongArrowDown
} from "@fortawesome/free-solid-svg-icons";

import { forwardRef } from "react";

export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="border-x-2 border-pink-100 max-w-md p-12 text-xl flex flex-col text-center justify-center min-h-screen"
      id={props.id}
    >
      <div>
        {props.prevButton ? (
          <Button
            onClick={() =>
              props.prevRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faLongArrowUp} />
          </Button>
        ) : null}
      </div>
      <div className="max-w-sm">
        <Image
          src="/test.jpeg"
          width={6}
          height={9}
          layout="responsive"
          quality={100}
        />
        <p>{props.text}</p>
      </div>

      <div>
        {props.nextButton ? (
          <Button
            onClick={() =>
              props.nextRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FontAwesomeIcon icon={faLongArrowDown} />
          </Button>
        ) : null}
      </div>
    </div>
  );
});
