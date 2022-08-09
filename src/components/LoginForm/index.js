import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../userData.js";

const LoginForm = (props) => {
  // const status = props.lStatus;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // console.log(userData)
  userData.map((obj) => {
    return obj;
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (email === "rupesh@gmail.com" && password === "12345") {
    //   navigate("/");
    //   props.logStatus("true");
    // }
    const checkIfTrue = userData.some(
      (person) => person.email === email && person.password === password
    );
    if (checkIfTrue) {
      navigate("/home");
      console.log(`Entered data ${email} & ${password} are Matched`);
      // props.logStatus("true");
    } else {
      alert(
        `Entered data ${email} & ${password} are Not Matched Please enter right details.`
      );
    }
  };

  return (
    <div id="form-div">
      <form id="form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <input
          type="submit"
          label="button"
          value="Login"
          style={{ margin: "10px" }}
        />
        <p>
          not registered!!<Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
