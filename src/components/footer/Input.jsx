

// const Input = ({ placeholder, intial, setInitial, type }) => {

//   // const handleChange = (e) => {
//   //   setInitial(e.target.value)
//   // }

 

//   return (
//     <input
//       style={{ width: "100%" }}
//       className="fw-500 bg-white"
//       placeholder={placeholder}
//       value={intial}
//       onChange={(e) => setInitial(e.target.value)}
//       type={type ? type : "text"}
//       required
//     />
//   );
// };

// export default Input;

import React from 'react';

const Input = ({ name, value, onChange, placeholder, type }) => {
  return (
    <input
      style={{ width: "100%" }}
      className="fw-500 bg-white"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type ? type : "text"}
      required
    />
  );
};

export default Input;
