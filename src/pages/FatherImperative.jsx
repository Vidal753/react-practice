import React, { useRef } from 'react';
import ImperativeHandle from '../components/useRef/ImperativeHandle';

const FatherImperative = () => {
  const imperativeRef = useRef();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ImperativeHandle
        ref={imperativeRef}
        title={'useImperativeHandle Test'}
      />
      <button
        className="p-2 bg-white"
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
