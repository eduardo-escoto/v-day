import Image from "next/image";
import randomColor from "randomcolor";
import Button from "./button";
import { forwardRef } from "react";
export default forwardRef(function ScrollCard(props, ref) {
  return (
    <div
      style={props.cardStyle}
      ref={ref}
      className="p-12 text-3xl flex flex-col text-center justify-center min-h-full"
      id={props.id}
    >
      <Image src="/test.jpeg" width={400} height={600} priority={true} />
      <p>{props.text}</p>
      <div>
        {props.prevButton ? (
          <Button
            onClick={() =>
              props.prevRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Previous
          </Button>
        ) : null}
        {props.nextButton ? (
          <Button
            onClick={() =>
              props.nextRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Next
          </Button>
        ) : null}
      </div>
    </div>
  );
});
