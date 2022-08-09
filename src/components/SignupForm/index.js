import { Link } from "react-router-dom";
import "../LoginForm/index.css";
const SignupForm = () => {
  return (
    <div id="form-div">
      <form id="form">
        <label>Name</label>
        <input type="text" label="name" required />
        <label>Job</label>
        <input type="text" label="job" required />
        <label>age</label>
        <input type="number" label="number" required />
        <label>Email</label>
        <input type="email" label="email" required />
        <label>Password</label>
        <input type="password" label="password" required />
        <label>Confirm Password</label>
        <input type="password" label="confirmPassword" required />

        <button>Signup</button>
        <p>
          Already an User? Please SignIn <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default SignupForm;
