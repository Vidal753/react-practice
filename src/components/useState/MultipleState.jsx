import React, { useState } from 'react';

const inputs = [
  { placeholder: 'name', name: 'name' },
  { placeholder: 'last name', name: 'lastName' },
  { placeholder: 'phone', name: 'phone' },
  { placeholder: 'email', name: 'email' },
  { placeholder: 'city', name: 'city' },
];

const MultipleState = () => {
  const [userInformation, setUserInformation] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
  });

  const handlerChange = (e) => {
    setUserInformation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showUserInformation = () => {
    console.log(userInformation);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 ">
      {inputs.map((input, index) => (
        <input
          className="rounded-md h-[2.5rem] w-[17rem] pl-4 text-[1.2rem]"
          key={`input-${index}`}
          placeholder={input.placeholder}
          name={input.name}
          onChange={handlerChange}
        />
      ))}
      <button
        className="bg-white p-2 text-[1rem] rounded-lg "
        onClick={showUserInformation}
      >
        Show Information
      </button>
    </div>
  );
};

export default MultipleState;
