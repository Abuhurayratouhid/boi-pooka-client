import { Link } from "react-router-dom";
import { createUser } from "../../redux/feature/user/userSlice";
import { useAppDispatch } from "../../redux/hook";

const SignUp = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignUp = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(createUser({ email, password }));
    // console.log("Sign Up info", email, password);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[350px] h-[430px] bg-slate-300 p-10 my-10">
        <h1 className="text-center text-2xl font-bold mb-4">Sign Up !</h1>
        <form onSubmit={handleSignUp}>
          <input
            className="w-full border px-2 py-1 rounded-xl mb-5"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <br />
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
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-primary font-bold">Login</span>
            </Link>
          </p>
          <button
            type="submit"
            className="w-full bg-primary text-white px-2 py-1 rounded-lg"
          >
            Sign Up
          </button>
          {/* <input
            className="w-full bg-primary text-white px-2 py-1 rounded-lg"
            type="button"
            value="Sign Up"
          /> */}
          <p className="text-xl text-center my-2">OR</p>

          <input
            className="w-full bg-sec_primary px-2 py-1 rounded-lg"
            type="button"
            value="Sign up with Google"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
