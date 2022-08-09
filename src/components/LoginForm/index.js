import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../../userData.js";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [emailErr, setEmailErr] = useState(false)
  const [passErr, setPassErr] = useState(false)

  const emailFunctionHandler = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let item = e.target.value;

    if (regex.test(item)) {
      setEmailErr(true)
    }
    else {
      setEmailErr(false)
    }
    setEmail(item)
  }

  const passwordFunctionHandler = (e) => {
    let item = e.target.value;
    if (item.length < 8) {
      setPassErr(true)
    }
    else {
      setPassErr(false)
    }
    setPassword(item)
  }

  userData.map((obj) => {
    return obj;
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkIfTrue = userData.some(
      (person) => person.email === email && person.password === password
    );
    if (checkIfTrue) {
      navigate("/home");
      console.log(`Entered data ${email} & ${password} are Matched`);
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
          onChange={emailFunctionHandler}
          required
        />
        <br />
        {setEmailErr ? "" : <p>Email Not Valid</p>}

        <label>Password</label>
        <input
          type="password"
          label="password"
          value={password}
          onChange={passwordFunctionHandler}
          required
        />
        {passErr ? <p>Password must be greater than 8 letters</p> : ""}
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
