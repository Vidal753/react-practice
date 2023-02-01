import React, { useRef } from "react";
import ImperativeHandle from "./ImperativeHandle";

const FatherImperative = () => {
  const imperativeRef = useRef();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ImperativeHandle
        ref={imperativeRef}
        title={"useImperativeHandle Test"}
      />
      <button
        className="bg-white p-2"
        onClick={() => {
          imperativeRef.current.handleVisible();
        }}
      >
        Change Visible
      </button>
    </div>
  );
};

export default FatherImperative;
