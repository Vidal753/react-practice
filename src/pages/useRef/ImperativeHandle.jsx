import React, { forwardRef, useImperativeHandle, useState } from "react";

//useImperativeHandle gives tha access to functions inside of component
//we can call this functions from outside this component.
const ImperativeHandle = forwardRef(({ title }, ref) => {
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      handleVisible,
    };
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-white text-[3rem]">
        {visible ? title : "Invisible"}
      </span>
    </div>
  );
});

export default ImperativeHandle;
