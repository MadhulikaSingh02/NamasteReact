import { useState } from "react";

function Login() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "input1") {
      setInput1(value);
    } else if (name === "input2") {
      setInput2(value);
    }
  };

  const handleSubmit = (event) => {
    console.log("Inside handleSubmit", event);
    event.preventDefault();
  };

  return (
    <div className="login-container login">
      <form className="login-form" onSubmit={handleSubmit}>
        <span>Login</span>
        <input
          name="input1"
          value={input1}
          placeholder="Enter your first name"
          onChange={handleInputChange}
        />
        <input
          name="input2"
          value={input2}
          placeholder="Enter your last name"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
