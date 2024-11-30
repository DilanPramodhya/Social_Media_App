import "./login.scss";
import { Link } from "react-router";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello User</h1>
          <p>
            Welcome back! Please log in to your account to connect with friends,
            share updates, and explore the latest posts. If you don&apos;t have
            an account yet, sign up to join the community and start sharing your
            story.
          </p>
          <span>Don&apos;t you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <label>User Name</label>
            <input type="text" placeholder="User Name" />
            <label>Password</label>
            <input type="password" placeholder="Your password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
