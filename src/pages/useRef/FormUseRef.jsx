import React, { useRef } from "react";

const FormUseRef = () => {
  const userRef = useRef();
  const passRef = useRef();

  const handleSubmit = () => {
    console.log({
      //With useRef we have access to the value of a input.
      //we don't need use the onChangeMethod.
      //and that we don't use the useState the page don't refresh many times
      username: userRef.current.value,
      password: passRef.current.value,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h2 className="text-[3rem] text-white">LOGIN</h2>
      <input ref={userRef} className="w-[20rem] px-2" placeholder="Username" />
      <input
        ref={passRef}
        className="w-[20rem] px-2"
        type={"password"}
        placeholder="Password"
      />
      <button className="bg-white p-2" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FormUseRef;
