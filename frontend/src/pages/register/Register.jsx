import "./register.scss";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Haven</h1>
          <p>
            Join our community today and connect with friends, share moments,
            and explore exciting content! Signing up is quick and easy – just
            fill in your details and become a part of the vibrant social network
            where you can interact, create, and be yourself. Start your journey
            now! This text is inviting and encourages users to sign up by
            highlighting the simplicity and fun of joining.
          </p>
          <span>Do you have an account? </span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <label>User Name</label>
            <input type="text" placeholder="User Name" />
            <label>Email</label>
            <input type="email" placeholder="User Email" />
            <label>Password</label>
            <input type="password" placeholder="Your password" />
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
