import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { loginUser } from "../../redux/feature/user/userSlice";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(loginUser({ email, password }));
    // console.log("login info:", email, password);
  };

  const { user, isLoading } = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.email, isLoading]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[350px] h-[400px] bg-slate-300 p-10 my-10">
        <h1 className="text-center text-2xl font-bold mb-4">Login !</h1>
        <form onSubmit={handleLogin}>
          <input
            className="w-full border px-2 py-1 rounded-xl mb-5"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <br />
          <input
            className="w-full border px-2 py-1 rounded-xl mb-5"
            type="password"
            name="password"
            id="pass"
            placeholder="Your Password"
            required
          />
          <p className="mb-3">
            Are you new here?{" "}
            <Link to="/signUp">
              <span className="text-primary font-bold">SignUp</span>
            </Link>
          </p>
          <button
            type="submit"
            className="w-full bg-primary text-white px-2 py-1 rounded-lg"
          >
            Login
          </button>
          <p className="text-xl text-center my-5">OR</p>

          <input
            className="w-full bg-sec_primary px-2 py-1 rounded-lg"
            type="button"
            value="Login with Google"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
