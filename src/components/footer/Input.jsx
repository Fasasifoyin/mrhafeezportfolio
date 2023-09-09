/* eslint-disable react/prop-types */

const Input = ({ placeholder, intial, setInitial, type }) => {
  return (
    <input
      style={{ width: "100%" }}
      className="fw-500 bg-white"
      placeholder={placeholder}
      value={intial}
      onChange={(e) => setInitial(e.target.value)}
      type={type ? type : "text"}
      required
    />
  );
};

export default Input;
